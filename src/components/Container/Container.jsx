// src/components/Container.js
import React from 'react';
import Timeline from '../../pages/Timeline/Timeline';
import Skills from '../Skills/Skills';
import './Container.css';

const Container = ({ timelineItems }) => {
  return (
    <div className="container">
      <Timeline items={timelineItems} />
      <Skills />
    </div>
  );
};

export default Container;
