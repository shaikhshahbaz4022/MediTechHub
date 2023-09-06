"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const express_1 = __importDefault(require("express"));
const user_model_1 = require("../models/user.model");
const jwt = __importStar(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const UserRouter = express_1.default.Router();
const secretKey = process.env.secretKey;
UserRouter.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const isUserPresent = await user_model_1.UserModel.findOne({ email });
        if (isUserPresent)
            return res.status(404).send({ msg: "user Already Present" });
        bcrypt_1.default.hash(password, 4, async (err, hash) => {
            if (err) {
                return res.send({ msg: err.message });
            }
            const data = new user_model_1.UserModel({ username, email, password: hash });
            await data.save();
            return res
                .status(201)
                .json({ msg: "Registration Succesfully", user: data });
        });
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).send({ msg: error.message });
    }
});
UserRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const isUserPresent = await user_model_1.UserModel.findOne({ email });
        if (!isUserPresent)
            return res.status(404).send({ msg: "Register First" });
        bcrypt_1.default.compare(password, isUserPresent.password, (err, result) => {
            if (result) {
                const token = jwt.sign({ userID: isUserPresent._id }, secretKey || "", { expiresIn: "1hr" });
                return res
                    .status(200)
                    .send({ msg: "Login Succesfully", user: isUserPresent, token });
            }
            else {
                return res.status(404).send({ msg: "Invalid Credentials" });
            }
        });
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).send({ msg: error.message });
    }
});
exports.default = UserRouter;
