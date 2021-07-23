import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="school-container">
        <p className="subtitle">Etablissement</p>
        <p className="school-title">ESGCI</p>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink className="dashboard-link" exact={true} to="/">Tableau de bord</NavLink>
          </li>
          <li>
            <NavLink className="monitoring-link" to="/monitoring">Surveillance en temps réel</NavLink>
          </li>
          <li>
            <NavLink className="agenda-link" to="/agenda">Agenda</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Paramètres</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;
