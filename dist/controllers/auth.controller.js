"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const login = ((req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        return res.json({
            token: services_1.AuthJWTTokenServices.generateToken(username, password),
        });
    }
    return res
        .status(401)
        .json({ message: "The username and password your provided are invalid" });
});
exports.default = {
    login
};
