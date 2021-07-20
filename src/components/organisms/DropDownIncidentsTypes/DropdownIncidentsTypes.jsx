import React, { useEffect, useState } from "react";
import ListIncidentsTypes from "../../molecules/listIncidentsTypes/ListIncidentsTypes";
import { Menu, Transition } from "@headlessui/react";

const incidentTitle = {
  high_humidity: "Haute humidité",
  heat_leak: "Fuite de châleur",
  defective_air_conditioning: "Air conditionnée",
};

const DropDownIncidentsTypes = ({ incidents, type }) => {
  const TYPE =  type; 

  return (
    <>
      <Menu
        as="div"
        className="dropdown-incidents relative inline-block text-left"
      >
        {({ open }) => (
          <>
            <div className="dropdown-header">
              <div>
                <h3>{incidentTitle[type]}</h3>
                <p>
                  {incidents[type] &&
                    `${
                      incidents[type].length > 1
                        ? `${incidents[type].length} incidents`
                        : `${incidents[type].length} incident`
                    }`}
                </p>
              </div>
              <Menu.Button className="button-dropdown">
                {open ? "Fermer le volet" : "Ouvrir le volet"}
              </Menu.Button>
            </div>
            <div className="detailed-informations">
              <span className="statement-date"> Date de relevé </span>
              <span> Localisation </span>
              <span> Statut </span>
            </div>

            <Transition show={open}>
              <Transition.Child
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <ListIncidentsTypes type={TYPE} incidents={incidents} />
              </Transition.Child>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
};

export default DropDownIncidentsTypes;
