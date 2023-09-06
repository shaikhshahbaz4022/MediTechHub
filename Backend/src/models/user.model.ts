import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  username?: string;
  email: string;
  password: string;
}
const userSchema: Schema = new Schema({
  username: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
export const UserModel = mongoose.model<User>("user", userSchema);
