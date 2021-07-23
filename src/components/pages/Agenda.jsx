import React, { useState } from 'react'
import CalendarDetailsIssues from '../organisms/calendarDetailsIssues/calendarDetailsIssues'
import CalendarList from '../organisms/calendarList/CalendarList'
import NewInterventionForm from '../organisms/newInterventionForm/NewInterventionForm'
import Modal from '../templates/modal/Modal'
import Page from '../templates/page/Page'

const Agenda = () => {
  const [showModal, setShowModal] = useState(false)

  function openModal () {
    setShowModal(true)
  }

  return (
    <Page>
      <CalendarDetailsIssues modalCallback={openModal}/>
      <CalendarList/>
      <Modal showModal={showModal}>
        <NewInterventionForm cancelCallback={setShowModal} validateCallback={setShowModal}/>
      </Modal>
    </Page>
  );
}

export default Agenda;
