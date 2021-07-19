import React from "react"
import Title from "../../atoms/title/title"
import IssueInformation from "../../molecules/issueInformation/issueInformation"
import Card from "../../templates/card"

const CommingIssue = () => {
  return (
    <Card className="commingIssue">
      <Title cssClass="card-title">2 évènements à venir</Title>
      <IssueInformation />
    </Card>
  );
};

export default CommingIssue;
