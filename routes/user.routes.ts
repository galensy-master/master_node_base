import express from 'express';
import {user}  from '../controllers';


const userRouter = express.Router();

userRouter.get('/dummy',user.dummy);

export default userRouter;


