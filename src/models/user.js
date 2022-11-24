import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
    min: 6,
    max: 1024,
  },
  email: {
    required: true,
    type: String,
    min: 6,
    max: 1024,
  },
  phoneNumber: {
    required: true,
    type: String,
    min: 6,
  },
  isAdmin: {
    required: true,
    type: Boolean,
    default: false,
  },
  videos: {
    type: Array,
  },
});

export default mongoose.model("User", userSchema);