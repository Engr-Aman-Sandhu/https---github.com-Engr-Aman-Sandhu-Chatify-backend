import express, { Express } from 'express';
import { config } from './config';

import { ChatifyServer } from './setupServer';
import databaseConnection from './setupDatabase';
class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: ChatifyServer = new ChatifyServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
