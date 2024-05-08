import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const ProjectSchema = new mongoose.Schema({
  projectName: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 255
  },
  description: {
      type: String,
      required: true,
      minLength: 1
  },
  startDate: {
      type: Date,
      required: true
  },
  endDate: {
      type: Date,
      required: true
  },
  fundingDetails: {
      type: String
  },
  status: {
      type: String,
      default: 'pending' // Default status is 'pending'
  },
  filePath: {
      type: String, // Store the file path as a string
      required: true // Assuming file upload is required
  }
});

export default mongoose.model('Project', ProjectSchema);
