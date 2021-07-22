import React from 'react';
import { NavLink } from 'react-router-dom';

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
            <NavLink to="/home">Tableau de bord</NavLink>
          </li>
          <li>
            <NavLink to="/live-data">Surveillance des capteurs</NavLink>
          </li>
          <li>
            <NavLink to="/agenda">Agenda</NavLink>
          </li>
          <li>
            <NavLink to="/settings"> Paramètres</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;
