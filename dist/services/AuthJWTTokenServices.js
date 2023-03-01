"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jwt_key = process.env.JWT_SECRET;
const generateToken = (username, password) => {
    return jsonwebtoken_1.default.sign({
        'user': username,
        'password': password
    }, jwt_key
    //,{ expiresIn: '1800s' }
    );
};
exports.generateToken = generateToken;
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    jsonwebtoken_1.default.verify(token, jwt_key, (err, user) => {
        console.log(err);
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
};
exports.authenticateToken = authenticateToken;
