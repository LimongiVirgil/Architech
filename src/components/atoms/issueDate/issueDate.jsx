import React from 'react';

const IssueDate = ({ date, size = "big" }) => {
  // Gets the first index where a space occours
  let splitedDate = date.indexOf(" ");
  // Gets day (first part)
  let dateDay = date.substr(0, splitedDate);
  // Gets time (second part)
  let dateTime = date.substr(splitedDate + 1);

  // Get Specific date format for month and day UTC (2021-07-08 => dim. 8 août)
  let separateNumberDate = dateDay.split("-");
  let day = new Date(
    Date.UTC(
      separateNumberDate[0],
      separateNumberDate[1],
      separateNumberDate[2]
    )
  );
  let options = { weekday: "short", day: "numeric", month: "short" };
  let formatedDay = day.toLocaleDateString("fr", options);
  let capitalizeDay =
    formatedDay.charAt(0).toUpperCase() + formatedDay.slice(1);

  //Format time
  let formatedTime = dateTime.substring(0, 5);

  return (
    <p className={`${size} issueDate`}>
      <span>{capitalizeDay}</span> à <span>{formatedTime}</span>
    </p>
  );
};

export default IssueDate;
