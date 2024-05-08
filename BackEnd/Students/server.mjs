import StudentModule from "./modules/schema.mjs";
import express, { query } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mongoose } from "mongoose";
import ProjectSchema from "./modules/ProjectSchema.mjs"
import fbSchema from "./modules/fbSchema.mjs"
import multer from 'multer';
import jwt from 'jsonwebtoken';
import path from 'path';

dotenv.config();
const port = 3002;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

const connectionString = process.env.DB_URL;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Rename uploaded files with a unique name
  }
});

// Multer upload configuration
const upload = multer({ storage: storage });

// Handle project creation with file upload
app.post('/fileprojects', upload.single('file'), async (req, res) => {
  try {
    const { projectName, description, startDate, endDate, fundingDetails } = req.body;
    const filePath = req.file.path.toString; // Get the path of the uploaded file

    // Create a new project with file reference
    const project = new ProjectSchema({
      projectName,
      description,
      startDate,
      endDate,
      fundingDetails,
      filePath // Store the file path in the database
    });

    await project.save(); // Save the project to the database

    res.status(201).json({ message: 'Project created successfully!' });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/login", async (req, res) => {
  const { Email, password } = req.body;
  try {
    const user = await StudentModule.findOne({
      Email: Email,
      password: password,
    });

    if (user) {
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1m' });

      // Send the token in response
      res.status(200).json({ token: token });
    } else {
      // If user not found, send unauthorized status
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

app.post("/SignUp", async (req, res) => {
  const { password, Email, Username } = req.body;
  const user = new StudentModule({
    Email: Email,
    Username: Username,
    password: password,
  });
  const result = await StudentModule.findOne({ Email: Email });
  if (result) {
    res.status(409).json("already Exist");
  } else {
    try {
      const dataSave = await user.save();
      res.status(200).json(dataSave);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
});

app.post('/projects', async (req, res) => {
  try {
    const { projectName, description, startDate, endDate, fundingDetails } = req.body;

    const project = new ProjectSchema({
      projectName,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      fundingDetails,
    });

 
    const newProject = await project.save();

    res.status(201).json(newProject); 
  } catch (err) {
    console.error('Error creating project:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/projects', async (req, res) => {
  try {
      
      const projects = await ProjectSchema.find(); 
      res.json(projects);
  } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/feedback', async (req, res) => {
  try {
    const { projectId, feedback } = req.body;

    const newFeedback = new fbSchema({
      projectId,
      feedback,
    });

    const savedFeedback = await newFeedback.save();

    res.status(201).json(savedFeedback);
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/feedbacks', async (req, res) => {
  try {
    // Fetch all feedback data from the database
    const feedbacks = await fbSchema.find();
    // Send the feedback data as a JSON response
    res.status(200).json(feedbacks);
  } catch (error) {
    // If an error occurs, send an error response with status code 500
    console.error('Error fetching feedbacks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, console.log(`Server started at http://localhost:${port}`));
