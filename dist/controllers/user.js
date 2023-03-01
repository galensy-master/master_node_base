"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummy = exports.login = void 0;
const AuthJWTTokenServices_1 = require("../services/AuthJWTTokenServices");
exports.login = ((req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        return res.json({
            token: (0, AuthJWTTokenServices_1.generateToken)(username, password),
        });
    }
    return res
        .status(401)
        .json({ message: "The username and password your provided are invalid" });
});
exports.dummy = ((req, res) => {
    return res
        .json({ message: "dummy" });
});
