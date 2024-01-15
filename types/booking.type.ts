import { ObjectId, Document } from "mongoose";

export interface BookingType extends Document {
  user: ObjectId;
  date: Date;
  service: ObjectId;
  isCompleted: boolean;
  assignedDoc: ObjectId;
}

export interface ServiceType extends Document {
  name: string;
  description: string;
}
