"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = {
    generateToken
};
