import expressAsyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import Bookings from "../models/booking";

const createBooking = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const booking = await Bookings.create(req.body);
    res.status(201).json({ data: booking });
  }
);

const retrievBookings = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const data = await Bookings.find()
      .populate({
        path: "user",
        select: "username email",
      })
      .populate({
        path: "service",
        select: "name",
      })
      .exec();
    res.status(200).json({ count: data.length, data });
  }
);

const retrievBookingDetail = expressAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const id = req.params.id;
    const data = await Bookings.findById(id);
    res.status(201).json(data);
  }
);

const updateBooking = expressAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const id = req.params.id;
    const data = await Bookings.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(data);
  }
);

const deleteBooking = expressAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const id = req.params.id;
    await Bookings.findByIdAndDelete({ _id: id });

    res.status(204).json({});
  }
);

export {
  createBooking,
  updateBooking,
  retrievBookings,
  retrievBookingDetail,
  deleteBooking,
};
