"use client";
import React, { useState } from 'react';
import Navigation from '../Navigation';
import '../../CSS/ProjectForm.css';

export default function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fundingDetails, setFundingDetails] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const api = "http://localhost:3002"; // Update this with your backend API URL

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('projectName', projectName);
      formData.append('description', description);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);
      formData.append('fundingDetails', fundingDetails);
      if (file) {
        formData.append('file', file);
      }

      const response = await fetch(`${api}/fileprojects`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Project created successfully!");
 
    } catch (error) {
      alert("Error occurred while creating project");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navigation />
      <div className="project-form-container">
        <div className="form-header">
          <h1>Project Form</h1>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="projectName"
              placeholder="Project Name"
              required
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="startDate"
              placeholder="Start Date"
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="endDate"
              placeholder="End Date"
              required
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="fundingDetails"
              placeholder="Funding Details"
              required
              value={fundingDetails}
              onChange={(e) => setFundingDetails(e.target.value)}
            />
          </div>
          <div className="form-group">
          <input
  type="file"
  name="file"
  onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  }}
/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
