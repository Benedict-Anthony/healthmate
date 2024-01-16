import express, { Router } from "express";
import {
  createBooking,
  deleteBooking,
  retrievBookingDetail,
  retrievBookings,
  updateBooking,
} from "../controllers/booking.controller";
import protect from "../middleware/authMiddleWare";

const bookingsRouter: Router = express.Router();

bookingsRouter
  .route("")
  .get(protect, retrievBookings)
  .post(protect, createBooking);

bookingsRouter
  .route("/:id")
  .get(protect, retrievBookingDetail)
  .delete(protect, deleteBooking)
  .put(protect, updateBooking);

export default bookingsRouter;
