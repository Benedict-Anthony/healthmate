import { Request } from "express";

export interface ResponseType extends Request {
  user: string;
}
