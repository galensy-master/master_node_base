"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.auth = void 0;
const auth_controller_1 = __importDefault(require("./auth.controller"));
exports.auth = auth_controller_1.default;
const user_controller_1 = __importDefault(require("./user.controller"));
exports.user = user_controller_1.default;
