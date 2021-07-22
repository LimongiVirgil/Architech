
import React from 'react'

function Modal ({children, showModal}) {
  return ( 
    <>
    {showModal && (
      <div className="modal">
        <div className="modal__container">
          {children}
        </div>
      </div>
    )}
    </>
  )
}

export default Modal
