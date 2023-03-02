import express from 'express';
import {auth}  from '../controllers';
import {AuthJWTTokenServices} from '../services'


const authRouter = express.Router();



authRouter.post('/login', auth.login)


export default authRouter;


