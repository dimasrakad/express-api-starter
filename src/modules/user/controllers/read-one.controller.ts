import { NextFunction, Request, Response } from "express";
import { connect } from "mongoose";
import User from "../model.js";

export const readOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Connect to MongoDB Atlas with username "belajar-mongodb", password "belajar-mongodb-hehe", and database name "Express-API-Starter"
    await connect(
      "mongodb+srv://belajar-mongodb:belajar-mongodb-hehe@belajar.nsejf2x.mongodb.net/Express-API-Starter?retryWrites=true&w=majority"
    );

    // let userId;

    User.findById(req.url.toString().substring(1))
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((e) => next(e));
  } catch (error) {
    next(error);
  }
};
