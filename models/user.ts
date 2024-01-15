import mongoose from "mongoose";
import { UserMethodTypes, UserTypes } from "../types/user.type";
import bycript from "bcryptjs";

const userSchema = new mongoose.Schema<UserTypes, {}, UserMethodTypes>(
  {
    username: {
      type: String,
      required: [true, "this field is required"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "this field is required"],
      unique: true,
      match: [
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "this field is required"],
    },

    role: {
      type: String,
      enum: ["user", "MDP"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const genSalt = bycript.genSaltSync(10);
  const hashPassword = bycript.hashSync(this.password, genSalt);
  this.password = hashPassword;
  next();
});

userSchema.method("verifyPassword", function verifyPassword(password: string) {
  const isValid = bycript.compareSync(password, this.password);
  return isValid;
});
const User = mongoose.model("User", userSchema);

export default User;
