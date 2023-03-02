import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const jwt_key = process.env.JWT_SECRET as string;


const generateToken = (username:string,password:string) => {
    return jwt.sign(
        { 
            'user': username,
        'password' : password
        }
        , jwt_key
        //,{ expiresIn: '1800s' }
        );
};

  export default {
    generateToken
  }
