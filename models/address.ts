import mongoose from "mongoose";
import { AddressType } from "../types/user.type";

const addressSchema = new mongoose.Schema<AddressType>({
  state: {
    type: String,
    required: [true, "this field is required"],
  },
  city: {
    type: String,
    required: [true, "this field is required"],
  },
  town: {
    type: String,
    required: [true, "this field is required"],
  },
  description: {
    type: String,
  },
  lat: {
    type: Number,
  },
  long: {
    type: Number,
  },

  zipCode: {
    type: String,
  },
});

const Address = mongoose.model<AddressType>("Address", addressSchema);

export default Address;
