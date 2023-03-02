import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import express from "express";

dotenv.config();
const jwt_key = process.env.JWT_SECRET as string;


const authenticateTokenCheck = (req:express.Request, res:express.Response, next:express.NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, jwt_key, (err: any, user: any) => {
      console.log(err)
  
      if (err) return res.sendStatus(403);
  
      next()
    })
  }

  export default {
    authenticateTokenCheck
  }
