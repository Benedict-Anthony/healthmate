import mongoose from "mongoose";
import { UserProfileTypes } from "../types/user.type";

const profileSchema = new mongoose.Schema<UserProfileTypes>({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: [true, "this field is required"],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "this field is required"],
    trim: true,
  },

  lastName: {
    type: String,
    required: [true, "this field is required"],
    trim: true,
  },

  dob: {
    type: Date,
    required: [true, "this field is required"],
  },

  photoUrl: {
    type: String,
    default: "no-photo.png",
  },

  address: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Address",
    unique: true,
    // required: [true, "this field is required"],
  },
});

const Profile = mongoose.model<UserProfileTypes>("Profile", profileSchema);

export default Profile;
