import React from 'react';
import './projectCard.css';

function projectCard(props) {
  console.log(props.project);
  const { title, about, tags, demo, github, image } = props.project;
  return (
    <div className="project-card">
      <div className="project-info">
        <lable className="project-title">{title}</lable>
        <div className="project-links">
          {demo && (
            <a href={demo} className="project-link">
              <div className="link-button">
                <i class="fi fi-rr-globe menu-icon"></i>Demo
              </div>
            </a>
          )}

          {github && (
            <a href={github} className="project-link">
              <div className="link-button">
                <i class="devicon-github-original colored"></i>Demo
              </div>
            </a>
          )}
        </div>
        <p className="project-about">{about}</p>
        <div className="project-tags">
          {tags.map((tag) => {
            return <lable className="project-tag">{tag}</lable>;
          })}
        </div>
      </div>
      <img src={image} className="project-phoeo" />
    </div>
  );
}

export default projectCard;
