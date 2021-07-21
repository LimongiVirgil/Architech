import React from 'react';

const Card = ({children, className, scroll}) => {
  return (
    <div className={`card${className ? ' ' + className : ''}${scroll ? ' card--scroll': ''}`}>{children}</div>
  )
}

export default Card
