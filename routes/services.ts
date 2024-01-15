import express, { Router } from "express";
import {
  retrieveService,
  createService,
  updatService,
  deleteService,
} from "../controllers/service.controler";

const serviceRouter: Router = express.Router();

serviceRouter.route("/").get(retrieveService).post(createService);
serviceRouter.route("/:id").put(updatService).delete(deleteService);

export default serviceRouter;
