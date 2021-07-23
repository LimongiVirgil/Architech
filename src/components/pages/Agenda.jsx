import React, { useState } from 'react'
import CalendarDetailsIssues from '../organisms/calendarDetailsIssues/calendarDetailsIssues'
import CalendarList from '../organisms/calendarList/CalendarList'
import NewInterventionForm from '../organisms/newInterventionForm/NewInterventionForm'
import Modal from '../templates/modal/Modal'
import Page from '../templates/page/Page'

const Agenda = () => {
  const [showModal, setShowModal] = useState(false)
  const [summaryCompanyInfos, setSummaryCompanyInfos] = useState()
  function openModal () {
    setShowModal(true)
  }

  function callBackDataCompany (values) {
    setSummaryCompanyInfos(values)
  }

  return (
    <Page>
      <CalendarDetailsIssues modalCallback={openModal} callBackDataCompany={callBackDataCompany} />
      <CalendarList/>
      <Modal showModal={showModal}>
        <NewInterventionForm 
          cancelCallback={setShowModal} 
          validateCallback={setShowModal} 
          callBackDataCompany={summaryCompanyInfos} 
        />
      </Modal>
    </Page>
  );
}

export default Agenda;
