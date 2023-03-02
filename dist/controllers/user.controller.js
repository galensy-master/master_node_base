"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dummy = ((req, res) => {
    return res
        .json({ message: "dummy" });
});
exports.default = {
    dummy
};
