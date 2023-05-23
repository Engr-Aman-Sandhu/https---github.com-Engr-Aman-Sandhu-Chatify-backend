import express, { Express } from 'express';

import { ChatifyServer } from './setupServer';
import databaseConnection from './setupDatabase';
class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: ChatifyServer = new ChatifyServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
