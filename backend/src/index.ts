import express, { Express, Request, Response } from 'express';
import { PORT } from './config/config';
import { corsMiddleware } from './middlewares/cors';
import userRouter from './routes/users';
import cookieParser from 'cookie-parser';

const app: Express = express();

app.disable('x-powered-by');

// Middlewares.
app.use(express.json());
app.use(corsMiddleware);
app.use(cookieParser());

// Rutas.
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Se viene Piggy-Bank pa.');
});

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
