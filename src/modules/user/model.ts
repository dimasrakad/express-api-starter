import { Schema, model } from "mongoose";

// Create an interface representing a document in MongoDB.
interface IUser {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

// Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

// Create a Model.
const User = model<IUser>("User", userSchema);

export default User;
