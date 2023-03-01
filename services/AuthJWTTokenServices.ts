import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const jwt_key = process.env.JWT_SECRET as string;


export const generateToken = (username:string,password:string) => {
    return jwt.sign(
        { 
            'user': username,
        'password' : password
        }
        , jwt_key
        //,{ expiresIn: '1800s' }
        );
};

export const authenticateToken = (req:any, res:any, next:any) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, jwt_key, (err: any, user: any) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }
