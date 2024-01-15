import { Response, Request, NextFunction, Errback } from "express";

type ErrorType = {
  message: string;
  path: string;
};

export const errorHandler = (
  err: Errback | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  switch (err.name) {
    case "MongoServerError":
      if (err.code === 11000) {
        res.status(400).json({ msg: `username or email already exist` });
      }
      return;

    case "ValidationError":
      if (err.errors.email) {
        res.status(400).json({ msg: `Invalid email address` });
        return;
      }

      const errors = Object.values(err.errors).map(
        (error: any) => `${error.path} is required`
      );
      console.log(errors);
      res.status(400).json(errors);
      return;

    case "MongoServerSelectionError":
      res.status(400).json({ msg: `Internet connection error` });
      return;

    case "CastError":
      console.log(err);
      res.status(400).json({ msg: `Detail - Not found` });

      return;
    default:
      next(err);
  }
};
