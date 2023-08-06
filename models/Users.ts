import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    display_name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    user_email: {
        type: String,
        required: true,
        min: 5,
        max: 50,
        unique: true
    },
    user_pass: {
        type: String,
        required: true,
        min: 8,
        max: 50,
    },
    user_role: Number,
    phone: String,
    status: {
        type: Number,
        default: 1
    }
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;