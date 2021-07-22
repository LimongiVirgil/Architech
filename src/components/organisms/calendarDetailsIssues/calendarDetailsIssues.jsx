import React, { useState } from 'react'
import Card from '../../templates/card'
import CalendarDisclosure from '../calendarDisclosure/calendarDisclosure'
import CalendarIssueHeader from '../../atoms/calendarIssueHeader/calendarIssueHeader'

const SENSOR_TYPES = [
  'high_humidity',
  'heat_leak',
  'defective_air_conditioning',
];

const initialOpeningState = SENSOR_TYPES.reduce((accu, sensor) => ({
  ...accu,
  [sensor] : false
}), {}) 

const CalendarDetailsIssues = () => {
  const [disclosureIds, setDisclosureIds] = useState(initialOpeningState)

  const disclosureCallback = (value) => {
    setDisclosureIds(value)
  }

  return (
    <Card>
      <CalendarIssueHeader 
        cssClass="issueHeaderAgenda"
      />
      {
        Object.entries(disclosureIds).map(
          ([key, value]) => (
            <CalendarDisclosure 
              key={key} 
              type={key} 
              isOpen={value}
              setter={disclosureCallback}
              initialState={initialOpeningState}
            />
          )
        )}
    </Card>
  );
};

export default CalendarDetailsIssues;
