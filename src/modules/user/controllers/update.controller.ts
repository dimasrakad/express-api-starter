import { NextFunction, Request, Response } from "express";
import { connect } from "mongoose";
import User from "../model.js";

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    interface IUpdate {
      firstName: string | string[];
      lastName: string | string[];
      phone: string | string[];
      email: string | string[];
    }

    const update = <IUpdate>{};

    if (req.headers.firstname) {
      update.firstName = req.headers.firstname;
    }
    if (req.headers.lastname) {
      update.lastName = req.headers.lastname;
    }
    if (req.headers.phone) {
      update.phone = req.headers.phone;
    }
    if (req.headers.email) {
      update.email = req.headers.email;
    }

    // Connect to MongoDB Atlas with username "belajar-mongodb", password "belajar-mongodb-hehe", and database name "Express-API-Starter"
    await connect(
      "mongodb+srv://belajar-mongodb:belajar-mongodb-hehe@belajar.nsejf2x.mongodb.net/Express-API-Starter?retryWrites=true&w=majority"
    );

    User.findByIdAndUpdate(req.url.toString().substring(1), { $set: update }, { new: true })
      .then((user) => {
        res.status(200).json({ user });
      })
      .catch((e) => next(e));
  } catch (error) {
    next(error);
  }
};
