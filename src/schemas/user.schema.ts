import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: String,
  role: String,
  password: String,
  firstName: String,
  lastName: String
})
