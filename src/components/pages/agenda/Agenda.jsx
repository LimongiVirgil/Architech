import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CalendarDetailsIssues from '../../organisms/calendarDetailsIssues/calendarDetailsIssues'
import CalendarList from '../../organisms/calendarList/CalendarList'
import NewInterventionForm from '../../organisms/newInterventionForm/NewInterventionForm'
import Modal from '../../templates/modal/Modal'
import Page from '../../templates/page/Page'
import Loader from '../../atoms/loader/loader'
import Title from '../../atoms/title/title'

const Agenda = () => {
  const [dataError, setDataError] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // intervention calendar
  const [interventionsByMonth, setInterventionsByMonth] = useState(null)
  
  // issues disclosure
  const [todayInterventions, setTodayInterventions] = useState(0)
  const [issuesByType, setIssuesByType] = useState(null)
  const [numberIssuesToInspect, setNumberIssuesToInspect] = useState(0)

  // new intervention form
  const [companyInfo , setCompanyInfo] = useState({})
  const [classRooms, setClassrooms] = useState([])
  const [incidentTypeText, setIncidentTypeText] = useState('')
  const [issuesIds, setIssuesIds] = useState([])

  useEffect(() => {
    getinterventionsByMonth()
    getIssuesToInspect()
  }, [])

  async function getinterventionsByMonth () {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/agenda/allFutureEvent/1`)
      if (!response || !response.data) return
      setInterventionsByMonth(response.data)
      getNumberInterventionsToday(response.data)
    } catch (error) {
      console.log(error)
      setDataError(true)
    }
  }

  async function getIssuesToInspect () {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/agenda/1`)
      if (!response || !response.data) return
      setIssuesByType(response.data)
      const issuesToInspect = getNumberIssuesToInspect(response.data)
      setNumberIssuesToInspect(issuesToInspect)
    } catch (error) {
      console.log(error)
      setNumberIssuesToInspect(0)
      setIssuesByType(null)
      // setDataError(true)
    }
  }

  function getNumberInterventionsToday (interventionsByMonth) {
    const today = new Date()
    const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0')
    const currentYear = today.getFullYear().toString()
    const currentMonthInterventions = interventionsByMonth[`${currentMonth}-${currentYear}`]

    const todayInterventions = currentMonthInterventions.filter(intervention => {
      const interventionDay = new Date(intervention.intervention_datetime.date)

      const isSameDay = interventionDay.getFullYear() === today.getFullYear() &&
      interventionDay.getMonth() === today.getMonth() &&
      interventionDay.getDate() === today.getDate()

      return isSameDay
    })
    setTodayInterventions(todayInterventions.length)
  }

  function getNumberIssuesToInspect (data) {
    const count = Object.values(data).reduce((acc, currIncidentType) => (
      acc + currIncidentType.incidents.length
    ), 0)
    return count
  }

  function openModalCompany(companyInfo, classRooms, incidentTypeText, issuesIds){
    setShowModal(true)
    setCompanyInfo(companyInfo)
    setClassrooms(classRooms)
    setIncidentTypeText(incidentTypeText)
    setIssuesIds(issuesIds)
  }

  function handleFormValidation () {
    setShowModal(false)

    // refresh data
    getinterventionsByMonth()
    getIssuesToInspect()
  }

  return (
    <Page className="agenda">
      {interventionsByMonth &&
        <>
        <Modal showModal={showModal}>
          <NewInterventionForm 
            cancelCallback={setShowModal} 
            validateCallback={handleFormValidation} 
            companyInfo ={companyInfo} 
            classRooms={classRooms}
            incidentTypeText={incidentTypeText}
            issuesIds={issuesIds}
          />
        </Modal>
        <div className="details-issues">
          <Title cssClass="page-title">Agenda</Title>
          <CalendarDetailsIssues 
            modalCallback={openModalCompany} 
            todayInterventions={todayInterventions} 
            numberIssuesToInspect={numberIssuesToInspect}
            issuesByType={issuesByType}
          />
        </div>
        <CalendarList interventionsByMonth={interventionsByMonth} />
      </>
      }
      {/* {!interventionsByMonth &&
        <Loader error={dataError} />
      } */}
    </Page>
  );
}

export default Agenda;
