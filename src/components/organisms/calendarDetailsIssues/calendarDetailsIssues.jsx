import React from 'react'
import Card from '../../templates/card'
import CalendarDisclosure from '../calendarDisclosure/calendarDisclosure'
import CalendarIssueHeader from '../../atoms/calendarIssueHeader/calendarIssueHeader'


const CalendarDetailsIssues = () => {
  const SENSOR_TYPES = [
    'high_humidity',
    'heat_leak',
    'defective_air_conditioning',
  ];

  return (
    <Card>
      <CalendarIssueHeader 
        cssClass="issueHeaderAgenda"
      />
      {
        SENSOR_TYPES.map(
          (sensorType, key) => (
            <CalendarDisclosure key={key} type={sensorType} />
          )
        )}
    </Card>
  );
};

export default CalendarDetailsIssues;