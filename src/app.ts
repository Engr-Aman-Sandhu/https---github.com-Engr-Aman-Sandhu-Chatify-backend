import express, { Express } from 'express';

import { ChatifyServer } from './setupServer';

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: ChatifyServer = new ChatifyServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
