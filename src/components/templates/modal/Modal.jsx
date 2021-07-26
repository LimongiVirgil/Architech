
import React from 'react'

function Modal ({children, showModal, isloaderModal}) {
  return ( 
    <>
    {showModal && 
      <div className="modal">
        <div className={`modal__container${isloaderModal ? ' modal__container--loader' : ''}`}>
          {children}
        </div>
      </div>
    }
    </>
  )
}

export default Modal
