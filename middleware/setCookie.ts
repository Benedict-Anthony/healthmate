import { Response } from "express";
import { generateToken } from "../lib/getToken";

export const setCookie = (id: string, res: Response) => {
  const token = generateToken(id);
  res.cookie("token", token, {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
    secure: false,
  });
};
