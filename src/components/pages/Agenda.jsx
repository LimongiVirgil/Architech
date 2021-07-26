import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CalendarDetailsIssues from '../organisms/calendarDetailsIssues/calendarDetailsIssues'
import CalendarList from '../organisms/calendarList/CalendarList'
import NewInterventionForm from '../organisms/newInterventionForm/NewInterventionForm'
import Modal from '../templates/modal/Modal'
import Page from '../templates/page/Page'
import Loader from '../atoms/loader/loader'

const Agenda = () => {
  const [showModal, setShowModal] = useState(false)
  const [companyInfo , setCompanyInfo] = useState({})
  const [interventionsByMonth, setInterventionsByMonth] = useState(null)
  const [todayInterventions, setTodayInterventions] = useState(0)
  const [dataError, setDataError] = useState(false)

  useEffect(() => {
    getinterventionsByMonth()
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

  function openModalCompany(companyInfo){
    setShowModal(true)
    setCompanyInfo(companyInfo)
  }

  return (
    <Page>
      {interventionsByMonth &&
        <>
          <CalendarDetailsIssues modalCallback={openModalCompany} todayInterventions={todayInterventions} />
          <CalendarList interventionsByMonth={interventionsByMonth} />
          <Modal showModal={showModal}>
            <NewInterventionForm 
              cancelCallback={setShowModal} 
              validateCallback={setShowModal} 
              companyInfo ={companyInfo} 
            />
          </Modal>
        </>
      }
      {!interventionsByMonth &&
        <Loader error={dataError} />
      }
    </Page>
  );
}

export default Agenda;
