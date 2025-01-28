import React from 'react';
import TimelineItem from '../../components/TimelineItem/TimelineItem';
import './Timeline.css';

const Timeline = ({ items }) => {
    return (
      <>
        
      <h1>Education</h1>
      <div className="timeline">
        {items.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
      </>
    );
  };
  
  export default Timeline;