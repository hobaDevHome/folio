import React from 'react';
import './projects.css';
import { ProjectsData } from '../../data/projects';
import ProjectCard from './projectCard';

function Projects() {
  return (
    <div className="projects">
      <label className="section-title">Projects</label>
      <div>
        {ProjectsData.map((pro) => {
          return <ProjectCard project={pro} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
