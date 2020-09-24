import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: String,
  role: String,
  pass: String,
  firstName: String,
  lastName: String
})
