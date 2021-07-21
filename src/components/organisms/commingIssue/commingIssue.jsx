import React, { useEffect, useState } from "react"
import Title from "../../atoms/title/title"
import IssueInformation from "../../molecules/issueInformation/issueInformation"
import Card from "../../templates/card"

const CommingIssue = () => {
	const [issuesData, setIssuesData] = useState(false)

	useEffect(() => {
    fetch('https://architech-hetic.herokuapp.com/api/dashboard/futureEvent/1')
      .then(response => response.json())
      .then(result => setIssuesData(result));
  }, [])

	return (
		<Card>
			<Title cssClass="card-title">2 évènements à venir</Title>
			{issuesData && issuesData.map((issue, index) => (
				<IssueInformation issue={issue} key={index}/>
			))}
		</Card>
	);
};

export default CommingIssue;
