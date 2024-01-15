import mongoose from "mongoose";
import { ServiceType } from "../types/booking.type";

const serviceSchema = new mongoose.Schema<ServiceType>(
  {
    name: {
      type: String,
      required: [true, "this field is required"],
    },
    description: {
      type: String,
      required: [true, "this field is required"],
      minlength: 10,
      maxlength: 255,
    },
  },
  {
    timestamps: true,
  }
);

const Services = mongoose.model<ServiceType>("Services", serviceSchema);

export default Services;
