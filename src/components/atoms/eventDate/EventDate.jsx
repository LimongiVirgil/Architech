import React from 'react'
import { capitalizeFirstLetter } from '../../../utils'

const EventDate = ({ date, size = "big" }) => {
  const day = new Date(date)
  const formatedDay = day.toLocaleDateString('fr-FR', {weekday: 'short', day: 'numeric', month: 'short'})
  const capitalizeDay = capitalizeFirstLetter(formatedDay)
  const formatedTime = day.getHours().toString().padStart(2, '0') + 'h' + day.getMinutes().toString().padStart(2, '0')

  return (
    <p className={`${size} eventDate`}>
      <span>{capitalizeDay}</span> à <span>{formatedTime}</span>
    </p>
  );
};

export default EventDate;
