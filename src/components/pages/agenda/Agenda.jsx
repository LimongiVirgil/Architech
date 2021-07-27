import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CalendarDetailsIssues from '../../organisms/calendarDetailsIssues/calendarDetailsIssues'
import CalendarList from '../../organisms/calendarList/CalendarList'
import NewInterventionForm from '../../organisms/newInterventionForm/NewInterventionForm'
import Modal from '../../templates/modal/Modal'
import Page from '../../templates/page/Page'
import Title from '../../atoms/title/title'
import SuccessNotif from '../../atoms/successNotif/SuccessNotif'

const Agenda = () => {
  const [showModal, setShowModal] = useState(false)
  const [showNotif, setShowNotif] = useState(false)

  // intervention calendar
  const [interventionsByMonth, setInterventionsByMonth] = useState(null)
  const [interventionDataError, setInterventionDataError] = useState(false)
  
  // issues disclosure
  const [todayInterventions, setTodayInterventions] = useState(0)
  const [issuesByType, setIssuesByType] = useState(null)
  const [numberIssuesToInspect, setNumberIssuesToInspect] = useState(0)
  const [issuesDataError, setIssuesDataError] = useState(false)

  // new intervention form
  const [companyInfo , setCompanyInfo] = useState({})
  const [classRooms, setClassrooms] = useState([])
  const [incidentTypeText, setIncidentTypeText] = useState('')
  const [issuesIds, setIssuesIds] = useState([])

  useEffect(() => {
    getinterventionsByMonth()
    getIssuesToInspect()
  }, [])

  async function getinterventionsByMonth (isUpdate) {
    try {
      setInterventionDataError(false)
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/agenda/allFutureEvent/1`)
      if (!response || !response.data) return
      setInterventionsByMonth(response.data)
      getNumberInterventionsToday(response.data)
      if (isUpdate) setShowNotif(true)
    } catch (error) {
      console.log(error)
      setInterventionDataError(true)
    }
  }

  async function getIssuesToInspect () {
    try {
      setIssuesDataError(false)
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/agenda/1`)
      if (!response || !response.data) return
      setIssuesByType(response.data)
      const issuesToInspect = getNumberIssuesToInspect(response.data)
      setNumberIssuesToInspect(issuesToInspect)
    } catch (error) {
      console.log(error)
      setIssuesDataError(true)
      setNumberIssuesToInspect(0)
      setIssuesByType(null)
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
    getinterventionsByMonth(true)
    getIssuesToInspect()
  }

  return (
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
    <Page className="agenda">
      <SuccessNotif show={showNotif} updateShow={setShowNotif} message="Intervention programmée avec succès !"/>
      <div className="details-issues">
        <Title cssClass="page-title" tag="h1">Agenda</Title>
        <CalendarDetailsIssues 
          modalCallback={openModalCompany} 
          todayInterventions={todayInterventions} 
          numberIssuesToInspect={numberIssuesToInspect}
          issuesByType={issuesByType}
          dataError={issuesDataError}
        />
      </div>
      <CalendarList interventionsByMonth={interventionsByMonth} dataError={interventionDataError}/>
    </Page>
  </>
  );
}

export default Agenda;
