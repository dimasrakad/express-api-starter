import { NextFunction, Request, Response } from "express";
import { connect } from "mongoose";
import User from "../model.js";

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Connect to MongoDB Atlas with username "belajar-mongodb", password "belajar-mongodb-hehe", and database name "Express-API-Starter"
    await connect(
      "mongodb+srv://belajar-mongodb:belajar-mongodb-hehe@belajar.nsejf2x.mongodb.net/Express-API-Starter?retryWrites=true&w=majority"
    );

    const user = new User({
      firstName: req.headers.firstname,
      lastName: req.headers.lastname,
      phone: req.headers.phone,
      email: req.headers.email,
    });

    const result = await user.save();

    res.status(201).json({ id: result._id });
  } catch (error) {
    next(error);
  }
};
