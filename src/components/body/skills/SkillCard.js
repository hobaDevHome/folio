import React from 'react';
import './skillCard.css';

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
    </div>
  );
}

export default SkillCard;
