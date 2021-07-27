import React from 'react'

const Loader = ({ error, light = false }) => {

  return (
    <div className="loaderContainer">
      {error && <p>Aucune donnée trouvée</p>}
      {!error && <div className={`loader${light ? ' loader--light' : ''}`}></div>}
    </div>
  )
}

export default Loader
