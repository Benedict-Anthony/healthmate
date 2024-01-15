import expressAsyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "express";
import Services from "../models/service";

const createService = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const service = await Services.create(req.body);
      res.status(201).json({ msg: "services added", data: service });
      return;
    } catch (error) {
      next(error);
    }
  }
);

const retrieveService = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data = await Services.find();
    res.status(200).json({ count: data.length, data });
  }
);

const updatService = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const data = await Services.findByIdAndUpdate(id, req.body);
    res.status(200).json({ data });
  }
);

const deleteService = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    await Services.findByIdAndDelete({ _id: id });
    res.status(204).json({ message: "Deleted succefully" });
  }
);

export { createService, retrieveService, updatService, deleteService };
