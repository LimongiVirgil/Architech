import React from "react";

const Title = ({text, cssClass}) => {

	return (
		<p className={`title-component ${cssClass}`}>{text}</p>
	)
}

export default Title;
