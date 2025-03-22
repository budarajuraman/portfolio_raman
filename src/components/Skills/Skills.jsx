import React, { useEffect } from 'react';
import './Skills.css';

const techSkills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'EJS', level: 87 },
  { name: 'JavaScript', level: 92 },
  { name: 'ReactJS', level: 88 },
  { name: 'NodeJS', level: 90 },
  { name: 'ExpressJS', level: 89 },
  { name: 'MongoDB', level: 85 },
  { name: 'Postman', level: 85 }
];

const nonTechSkills = [
  { name: 'Communication', level: 92 },
  { name: 'Problem Solving', level: 88 },
  { name: 'Teamwork', level: 86 },
  { name: 'Time Management', level: 92 },
  { name: 'Adaptability', level: 90 },
  { name: 'Critical Thinking', level: 90 }
];


const Skills = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach((bar) => {
      const level = bar.getAttribute('data-level');
      bar.style.width = '0'; 
      requestAnimationFrame(() => {
        bar.classList.add('animated');
        bar.style.width = level; 
      });
    });
  }, []);

  return (
    <div className="skills-container">
      <div className="skills-section tech-skills">
        <h1>Technical Skills</h1>
        <div className="skills-grid">
          {techSkills.map((skill, index) => (
            <div className="glass-card" key={index}>
              <div className="tech-skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="tech-skill-bar">
                <div
                  className="skill-level"
                  data-level={`${skill.level}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section non-tech-skills">
        <h1>Non-Technical Skills</h1>
        <div className="non-tech-list">
          {nonTechSkills.map((skill, index) => (
            <div className="glass-card circular-card" key={index}>
              <p>{skill.name}</p>
              <div className="circular-progress">
                <svg>
                  <circle cx="40" cy="40" r="35"></circle>
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    style={{ strokeDasharray: `${2 * Math.PI * 35}`, strokeDashoffset: `${(1 - skill.level / 100) * 2 * Math.PI * 35}` }}
                  ></circle>
                </svg>
                <div className="percentage">{skill.level}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
