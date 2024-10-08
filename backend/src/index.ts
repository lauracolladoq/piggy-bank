import express, { Express, NextFunction, Request, Response } from 'express';
import { PORT } from './config/config';
import { corsMiddleware } from './middlewares/cors';
import cookieParser from 'cookie-parser';
import authMiddleware from './middlewares/auth';
import { CustomRequest } from './types/types';
import userRouter from './routes/user-routes';

const app: Express = express();

app.disable('x-powered-by');

// Middlewares.
app.use(express.json());
app.use(corsMiddleware);
app.use(cookieParser());
app.use((req: Request, res: Response, next: NextFunction) =>
  authMiddleware(req as CustomRequest, res, next)
);

// Rutas.
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Se viene Piggy-Bank pa.');
});

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
