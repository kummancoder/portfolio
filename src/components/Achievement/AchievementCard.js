import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css';

function AchievementCard({ id, title, details, date, image }) {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: theme.primary30,
    transition: '0.3s',
  };

  const hoverStyle = {
    backgroundColor: theme.primary50,
  };

  return (
    <div key={id} className="achievement-card" style={cardStyle}>
      <div className="achievecard-content">
        <div className="achievecard-details1">
          <h2 style={{ color: theme.tertiary }}>{title}</h2>
          <p style={{ color: theme.tertiary80 }}>{details}</p>
        </div>
        <div className="achievecard-details2" style={{ color: theme.primary }}>
          <h5>{date}</h5>
        </div>
      </div>
      <div className="achievecard-imgcontainer">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default AchievementCard;
