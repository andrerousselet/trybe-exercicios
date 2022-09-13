import express, { Response } from 'express';
import 'express-async-errors'
import errorMiddleware from './middlewares/error';

const app = express();

app.use(express.json())

app.get('/', (_req, res: Response<string>) => res.send('Express + TypeScript'))

app.use(errorMiddleware);

export default app;
