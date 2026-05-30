// server/src/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['technician', 'client', 'admin'],
      default: 'technician',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
