import { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/user";
import { setCookie } from "../middleware/setCookie";

export const loginHandler = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (!user) {
      res.status(400).json({ msg: "Invalid email or password" });
      return;
    }
    const validPassword = user.verifyPassword(body.password);
    if (!validPassword) {
      res.status(400).json({ msg: "Invalid email or password" });
      return;
    }
    const { email, username } = user;
    setCookie(user.id, res);
    res.status(200).json({ username, email });
  }
);

export const signOutHandler = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.cookie("token", "", { expires: new Date(Date.now()) });
    res.status(200).json({ msg: "Logged out succefull" });
  }
);

export const signUpHandler = expressAsyncHandler(
  async (req: Request, res: Response, next) => {
    const body = req.body;
    const user = await User.create(body);
    const { email, username, id } = user;
    setCookie(id, res);
    res.status(201).json({ email, username });
  }
);
