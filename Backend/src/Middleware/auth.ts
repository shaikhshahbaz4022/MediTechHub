import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretkey = process.env.secretKey;
const auth = (req: any, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization?.split(" ")[1];
  if (token) {
    let decoded: any | undefined = jwt.verify(token, secretkey!);
    if (decoded) {
      req.userID = decoded.userID;
      next();
    } else {
      return res.status(404).send({ msg: "Auth Error" });
    }
  } else {
    return res.status(404).json({ msg: "Login first" });
  }
};
export default auth;
