import express, { Router } from "express";
import { createProfile } from "../controllers/profile.controller";

const profileRouter: Router = express.Router();

profileRouter.route("/").post(createProfile);

export default profileRouter;
