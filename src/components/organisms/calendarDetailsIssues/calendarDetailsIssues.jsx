import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../../templates/card/Card'
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

const CalendarDetailsIssues = ({ modalCallback, todayInterventions }) => {
  const [disclosureIds, setDisclosureIds] = useState(initialOpeningState)
  const [issuesByType, setIssuesByType] = useState(null)
  const [numberIssuesToInspect, setNumberIssuesToInspect] = useState(null)

  useEffect(() => {
    getCalendarData()
  }, [])

  async function getCalendarData () {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/agenda/1`)
      if (!response || !response.data) return
      setIssuesByType(response.data)
      const issuesToInspect = getNumberIssuesToInspect(response.data)
      setNumberIssuesToInspect(issuesToInspect)
    } catch (error) {
      console.log(error)
    }
  }

  function getNumberIssuesToInspect (data) {
    const count = Object.values(data).reduce((acc, currIncidentType) => (
      acc + currIncidentType.incidents.length
    ), 0)
    return count
  }

  const disclosureCallback = (value) => {
    setDisclosureIds(value)
  }

  return (
    <Card>
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
        )}
    </Card>
  );
};

export default CalendarDetailsIssues;
