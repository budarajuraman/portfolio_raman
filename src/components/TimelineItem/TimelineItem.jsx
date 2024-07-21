import React from 'react';
import '../../pages/Timeline/Timeline.css';

const TimelineItem = ({ item, index }) => {
    const alignClass = index % 2 === 0 ? 'left' : 'right';
  
    return (
      <div className={`timeline-item ${alignClass}`}>
        <div className="timeline-content">
        <span className="tag" style={{ background: item.category.color, boxShadow: '0px 0px 10px 0px rgb(77, 188, 232)',}}>
                {item.category.tag}
        </span>
          <time>{item.date}</time>
          <p>{item.text}</p>
          <p><span style={{boxShadow: '0px 0px 8px 0px rgb(77, 188, 232)'}}>{item.score}</span></p>
        </div>
        <span className="circle" />
      </div>
    );
  };
  
  export default TimelineItem;