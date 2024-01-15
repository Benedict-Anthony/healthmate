import { Document, ObjectId } from "mongoose";

export interface UserTypes extends Document {
  username: string;
  email: string;
  password: string;
  role: "MDP" | "user";
}

export interface UserMethodTypes extends Document {
  verifyPassword: (password: string) => boolean;
}

export interface UserProfileTypes extends Document {
  user: ObjectId;
  firstName: string;
  lastName: String;
  dob: Date;
  photoUrl: string;
  address: ObjectId;
}

export interface AddressType extends Document {
  state: string;
  city: string;
  town: string;
  lat: number;
  long: number;
  zipCode: string;
  description: string;
}
