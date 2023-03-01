import express from 'express';
import {login,dummy}  from '../controllers/user';


export const router = express.Router();



router.post('/login', login)
router.post('/dummy',dummy);


