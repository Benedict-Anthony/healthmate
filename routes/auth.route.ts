import express, { Router } from "express";
import {
  loginHandler,
  signOutHandler,
  signUpHandler,
} from "../controllers/auth.controller";

const authRouter: Router = express.Router();

authRouter.post("/sign-in", loginHandler);
authRouter.post("/sign-out", signOutHandler);
authRouter.post("/sign-up", signUpHandler);

export default authRouter;
