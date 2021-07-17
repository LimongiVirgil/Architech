import React from "react";
import './styles.scss';

const Title = ({text, cssClass}) => {

	return (
		<p className={cssClass}>{text}</p>
	)
}

export default Title;