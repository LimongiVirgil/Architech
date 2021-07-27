import React, { useState } from 'react'
import CalendarDisclosure from '../calendarDisclosure/calendarDisclosure'
import CalendarIssueHeader from '../../atoms/calendarIssueHeader/calendarIssueHeader'
import Loader from '../../atoms/loader/loader'

const SENSOR_TYPES = [
  'high_humidity',
  'heat_leak',
  'defective_air_conditioning',
];

const initialOpeningState = SENSOR_TYPES.reduce((accu, sensor) => ({
  ...accu,
  [sensor] : false
}), {}) 

const CalendarDetailsIssues = ({ modalCallback, todayInterventions, numberIssuesToInspect, issuesByType, dataError }) => {
  const [disclosureIds, setDisclosureIds] = useState(initialOpeningState)

  const disclosureCallback = (value) => {
    setDisclosureIds(value)
  }

  return (
    <>
      <CalendarIssueHeader 
        cssClass="issue-header-agenda"
        todayEventsNumber={numberIssuesToInspect}
        interventionsNumber={todayInterventions}
      />
      { issuesByType &&
        Object.entries(issuesByType).map(
          ([key, value]) => (
            <CalendarDisclosure
              key={key}
              type={key}
              isOpen={disclosureIds[key]}
              setter={disclosureCallback}
              initialState={initialOpeningState}
              issueTypeData={value}
              actionCallback={modalCallback}
            />
          )
        )
      }
      {!issuesByType &&
        <Loader error={dataError} />
      }
    </>
  );
};

export default CalendarDetailsIssues;
