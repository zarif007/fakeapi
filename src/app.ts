import express, { Request, Response, Express, NextFunction } from 'express';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import routes from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import httpStatus from 'http-status';

const app: Express = express();

// Cors setup
app.use(cors());

app.use(cookieParser());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hell000088o');
});

// Global error handler
app.use(globalErrorHandler);

//Handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Endpoint Not Found',
      },
    ],
  });
  next();
});

export default app;
