import { Application } from 'express';
import Logger from 'bunyan';
import { config } from '@root/config';
import { authRoutes } from '@auth/routes/authRoutes';

const log: Logger = config.createLogger('routes');

const BASE_PATH = '/api/v1';

export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, authRoutes.routes());
  };
  routes();
};
