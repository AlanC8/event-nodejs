import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  username?: string;
  password: string;
  city?: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String,required:false },
  password: { type: String, required: true },
  city: { type: String,required:false}
});

export default mongoose.model<IUser>("User", UserSchema);
