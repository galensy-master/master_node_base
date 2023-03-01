import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { router as  user_routes} from './routes/user';
import BodyParser from 'body-parser';
import {authenticateToken} from './services/AuthJWTTokenServices'


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get("/super-secure-resource", authenticateToken,(req, res) => {
    res
      .status(401)
      .json({ message: "You need to be logged in to access this resource" });
  });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use(BodyParser.json());
app.use('/api/user',user_routes);