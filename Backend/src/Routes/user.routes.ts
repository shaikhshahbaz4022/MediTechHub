import bcrypt from "bcrypt";
import express, { Request, Response } from "express";
import { User, UserModel } from "../models/user.model";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const UserRouter = express.Router();
const secretKey = process.env.secretKey;
UserRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, email, password }: User = req.body;
    const isUserPresent = await UserModel.findOne({ email });
    if (isUserPresent)
      return res.status(404).send({ msg: "user Already Present" });
    bcrypt.hash(password, 4, async (err, hash) => {
      if (err) {
        return res.send({ msg: err.message });
      }
      const data: User = new UserModel({ username, email, password: hash });
      await data.save();
      return res
        .status(201)
        .json({ msg: "Registration Succesfully", user: data });
    });
  } catch (error: any) {
    console.log("Error", error);
    res.status(500).send({ msg: error.message });
  }
});

UserRouter.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const isUserPresent = await UserModel.findOne({ email });
    if (!isUserPresent) return res.status(404).send({ msg: "Register First" });

    bcrypt.compare(password, isUserPresent.password, (err, result: boolean) => {
      if (result) {
        const token: string = jwt.sign(
          { userID: isUserPresent._id },
          secretKey || "",
          { expiresIn: "1hr" }
        );
        return res
          .status(200)
          .send({ msg: "Login Succesfully", user: isUserPresent, token });
      } else {
        return res.status(404).send({ msg: "Invalid Credentials" });
      }
    });
  } catch (error: any) {
    console.log("Error", error);
    res.status(500).send({ msg: error.message });
  }
});

export default UserRouter;
