import { NextFunction, Response, Request } from "express";
import expressAsyncHandler from "express-async-handler";
import Profile from "../models/profile";
import Address from "../models/address";

const createProfile = expressAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    // @ts-ignore
    const userId = req.user;

    const [address, profile] = await Promise.all([
      Address.create(req.body),
      Profile.create({ ...req.body, user: userId }),
    ]);

    profile.address = address.id;
    await profile.save();
    const data = await profile.populate("address");
    res.status(201).json(data);
  }
);

const retrieveProfile = expressAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    // @ts-ignore
    const userId = req.user;
    const data = await Profile.findOne({ user: userId })
      .populate({
        path: "address",
        select: "town city state",
      })
      .populate({
        path: "user",
        select: "username email role",
      })
      .exec();

    res.status(200).json(data);
  }
);

const updateProfile = expressAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    // @ts-ignore
    const userId = req.user;

    const userProfile = await Profile.findOne({ user: userId });

    const address_id = userProfile?.address;
    const profile_id = userProfile?.id;

    const [_address, profile] = await Promise.all([
      Address.findOneAndUpdate({ _id: address_id }, req.body, {
        new: true,
        runValidators: true,
      }),

      Profile.findOneAndUpdate({ _id: profile_id }, req.body, {
        new: true,
        runValidators: true,
      }),
    ]);
    const data = await profile?.populate("address");
    res.status(201).json(data);
  }
);

export { createProfile, retrieveProfile, updateProfile };
