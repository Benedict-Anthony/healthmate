import express, { Router } from "express";
import {
  createBooking,
  deleteBooking,
  retrievBookingDetail,
  retrievBookings,
  updateBooking,
} from "../controllers/booking.controller";

const bookingsRouter: Router = express.Router();

bookingsRouter.route("").get(retrievBookings).post(createBooking);
bookingsRouter
  .route("/:id")
  .get(retrievBookingDetail)
  .delete(deleteBooking)
  .put(updateBooking);

export default bookingsRouter;
