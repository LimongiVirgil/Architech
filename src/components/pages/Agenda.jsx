import React, { useState } from 'react'
import CalendarDetailsIssues from '../organisms/calendarDetailsIssues/calendarDetailsIssues'
import CalendarList from '../organisms/calendarList/CalendarList'
import NewInterventionForm from '../organisms/newInterventionForm/NewInterventionForm'
import Modal from '../templates/modal/Modal'
import Page from '../templates/page/Page'

const Agenda = () => {
  const [showModal, setShowModal] = useState(false)
  const [companyInfo , setCompanyInfo] = useState({})

  function openModalCompany(companyInfo){
    setShowModal(true)
    setCompanyInfo(companyInfo)
  }

  return (
    <Page>
      <CalendarDetailsIssues modalCallback={openModalCompany} />
      <CalendarList/>
      <Modal showModal={showModal}>
        <NewInterventionForm 
          cancelCallback={setShowModal} 
          validateCallback={setShowModal} 
          companyInfo ={companyInfo} 
        />
      </Modal>
    </Page>
  );
}

export default Agenda;
