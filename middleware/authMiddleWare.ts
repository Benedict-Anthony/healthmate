import { Request, Response, NextFunction } from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/user";
import { decodeToken } from "../lib/getToken";

const protect = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;

    if (!token) {
      res
        .status(401)
        .json({ message: "unauthorized, credentials were not provided" });
      return;
    }

    const payload = decodeToken(token);
    const user = await User.findById({ _id: payload.id });
    if (!user) {
      res.status(404).json({ message: "Invalid token, user not found" });
    }

    // @ts-ignore
    req.user = user?.id;
    next();
  }
);

export default protect;
