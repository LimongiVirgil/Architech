import React from 'react'

const Title = ({children, cssClass}) => {

  return (
    <p className={`title-component ${cssClass}`}>{children}</p>
  )
}

export default Title;
