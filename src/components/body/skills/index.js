import React from 'react';
import './skills.css';
import { SkillsData } from '../../data/siklls';
import SkillCard from './SkillCard';

function Skills() {
  return (
    <div className="skills">
      <lable className="section-title">Skills</lable>
      <div className="skills-container">
        {SkillsData.map((item) => {
          return (
            <div className="skills-secion">
              <lable className="skills-secion-title">{item.type}</lable>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
