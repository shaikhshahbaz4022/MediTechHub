"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretkey = process.env.secretKey;
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        let decoded = jsonwebtoken_1.default.verify(token, secretkey);
        if (decoded) {
            req.userID = decoded.userID;
            next();
        }
        else {
            return res.status(404).send({ msg: "Auth Error" });
        }
    }
    else {
        return res.status(404).json({ msg: "Login first" });
    }
};
exports.default = auth;
