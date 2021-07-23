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

const CalendarDetailsIssues = ({ modalCallback, callBackDataCompany }) => {
  const [disclosureIds, setDisclosureIds] = useState(initialOpeningState)
  const [issuesByType, setIssuesByType] = useState(null)

  useEffect(() => {
    getCalendarData()
  }, [])

  async function getCalendarData () {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/agenda/1`)
      if (!response || !response.data) return
      setIssuesByType(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const disclosureCallback = (value) => {
    setDisclosureIds(value)
  }

  return (
    <Card>
      <CalendarIssueHeader 
        cssClass="issue-header-agenda"
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
              callBackDataCompany={callBackDataCompany}
            />
          )
        )}
    </Card>
  );
};

export default CalendarDetailsIssues;
