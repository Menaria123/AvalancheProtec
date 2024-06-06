import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ temperature }) => {
  let icon;
  if (temperature > 25) {
    icon = <FontAwesomeIcon icon="fa-regular fa-sun" />;
  } else if (temperature > 10) {
    icon = <FontAwesomeIcon icon="fa-light fa-cloud-sun" />;
  } else {
    icon = <FontAwesomeIcon icon="fa-regular fa-cloud-rain" />;
  }

  return <div className="icon">{icon}</div>;
};
export default Icon;

