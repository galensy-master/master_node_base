"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = require("./routes/user");
const body_parser_1 = __importDefault(require("body-parser"));
const AuthJWTTokenServices_1 = require("./services/AuthJWTTokenServices");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get("/super-secure-resource", AuthJWTTokenServices_1.authenticateToken, (req, res) => {
    res
        .status(401)
        .json({ message: "You need to be logged in to access this resource" });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use(body_parser_1.default.json());
app.use('/api/user', user_1.router);
