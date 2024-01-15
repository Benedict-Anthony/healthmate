import { NextFunction, Response, Request } from "express";
import expressAsyncHandler from "express-async-handler";

const createProfile = expressAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    console.log(req.body);
    res.status(201).json({ message: "Connected" });
  }
);
const retrieveProfiles = expressAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    console.log(req.body);
    res.status(201).json({ message: "Connected" });
  }
);
const updateProfiles = expressAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    console.log(req.body);
    res.status(201).json({ message: "Connected" });
  }
);

export { createProfile, retrieveProfiles, updateProfiles };
