import React from 'react';
import { NavLink } from 'react-router-dom';

const ByCounty = (props) => {
	console.log('in counties', props)
	const renderedCounties = props.counties.map((county, index) =>
		<div key={index}>
			<h3><NavLink
			  to="/{county}"
			  >{county}</NavLink>
			 </h3>
		</div>
		)

	return(
		<div id="report">
			{renderedCounties}
		</div>
	)
	
}

export default ByCounty;