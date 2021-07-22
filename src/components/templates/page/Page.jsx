import React from 'react'

const Page = ({children, className}) => {
  return (
    <div className={`page${className ? ' ' + className : ''}`}>
      {children}
    </div>
  );
}

export default Page;
