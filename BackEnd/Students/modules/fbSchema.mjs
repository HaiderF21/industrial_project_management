import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

const fbSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.model('Feedback', fbSchema);