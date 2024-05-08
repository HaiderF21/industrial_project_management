"use client";
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Navigation from '../Navigation';

// Define the type of your project
interface Project {
  _id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ProjectGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Set the type of projects

  useEffect(() => {
    // Fetch project data from the database
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3002/projects'); // Adjust the API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
    <Navigation/>
      {projects.map((project) => (
        <Paper
          key={project._id}
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={project.image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: {project._id}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  ${project.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
};

export default ProjectGrid;
