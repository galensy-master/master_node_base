import express, { Express, Request, Response, Router} from 'express';
import dotenv from 'dotenv';
import { authRouter,userRouter} from './routes';
import BodyParser from 'body-parser';
import {authCheck} from './middleware';



dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use(BodyParser.json());

const publicRouters = Router();
const secureRouters = Router();

secureRouters.use(authCheck.authenticateTokenCheck);



publicRouters.use('/login', authRouter);
secureRouters.use('/user', userRouter);

app.use('/', publicRouters);
app.use('/api', secureRouters);
