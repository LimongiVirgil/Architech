import React from 'react'

const Loader = ({error}) => {

  return (
    <div className="loaderContainer">
      {error && <p>Aucune donnée trouvé</p>}
      {!error && <div className="loader"></div>}
    </div>
  )
}

export default Loader
