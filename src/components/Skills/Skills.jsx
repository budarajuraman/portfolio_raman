import React, { useEffect } from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'ReactJS', level: 80 },
  { name: 'NodeJS',level : 65},
  { name: 'ExpressJS',level : 75},
  { name: 'MongoDB',level : 80}
];

const Skills = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach((bar) => {
      const level = bar.getAttribute('style');
      bar.style.width = '0';
      setTimeout(() => {
        bar.classList.add('animated');
        bar.setAttribute('style', level);
      }, 100);
    });
  }, []);

  return (
    <div className="skills">
      <h1>Skills</h1>
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="skill-name">{skill.name}</div>
          <div className="skill-bar">
            <div
              className="skill-level"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
