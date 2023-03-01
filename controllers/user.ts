import { Request, Response } from 'express';
import { generateToken } from '../services/AuthJWTTokenServices';



export const login = ((req: Request, res: Response) => {

    
    const  {username,password} = req.body;

    if (username === "admin" && password === "admin") {
        return res.json({
          token: generateToken(username,password),
        });
      }
    
      return res
        .status(401)
        .json({ message: "The username and password your provided are invalid" });
})


export const dummy = ((req: Request, res: Response) => {

    
    
      return res
        .json({ message: "dummy" });
})