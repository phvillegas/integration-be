import express, { type Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from 'pino-http';

import routes from '@routes/index';
import { logger } from '@utils/logger';

export const createApp = (): Application => {
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(helmet());
  app.use(pinoHttp({ logger }));
  app.use(express.json());

  // Routes
  app.use('/api/v1', routes);

  return app;
};
