import express, { Router } from "express";
import {
  createProfile,
  retrieveProfile,
  updateProfile,
} from "../controllers/profile.controller";
import protect from "../middleware/authMiddleWare";

const profileRouter: Router = express.Router();

profileRouter
  .route("/")
  .post(protect, createProfile)
  .get(protect, retrieveProfile)
  .put(protect, updateProfile);

export default profileRouter;
