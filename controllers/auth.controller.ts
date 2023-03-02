import { Request, Response } from 'express';
import { AuthJWTTokenServices } from '../services';



const login = ((req: Request, res: Response) => {
    const  {username,password} = req.body;

    if (username === "admin" && password === "admin") {
        return res.json({
          token: AuthJWTTokenServices.generateToken(username,password),
        });
      }
    
      return res
        .status(401)
        .json({ message: "The username and password your provided are invalid" });
});

export default {
  login
}