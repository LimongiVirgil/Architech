import React from 'react';

const IssueDate = ({date, time, size = "big"}) => {
	return (
		<p className={`${size} issueDate`}>
			<span>{date}</span> à <span>{time}</span>
		</p>
	)
}

export default IssueDate;