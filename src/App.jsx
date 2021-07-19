import React from "react";
import CommingIssue from "./components/organisms/commingIssue/commingIssue";
import IncidentsOfTheMonth from "./components/organisms/incidentsOfTheMonth/incidentsOfTheMonth";

function App() {
  return (
    <div className="App">
      <IncidentsOfTheMonth />
      <CommingIssue />
    </div>
  );
}

export default App;
