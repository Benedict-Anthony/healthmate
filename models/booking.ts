import mongoose from "mongoose";
import { BookingType } from "../types/booking.type";

const BookingSchema = new mongoose.Schema<BookingType>(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      required: [true, "this field is required"],
      ref: "User",
    },
    date: {
      type: Date,
      required: [true, "this field is required"],
    },
    service: {
      type: mongoose.SchemaTypes.ObjectId,
      required: [true, "this field is required"],
      ref: "Services",
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    assignedDoc: {
      type: mongoose.SchemaTypes.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

const Bookings = mongoose.model<BookingType>("Bookings", BookingSchema);

export default Bookings;
