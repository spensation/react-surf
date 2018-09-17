import React from 'react';
import { Link } from 'react-router-dom'

const Spots = (props) => {
	console.log(props)
	const { surfSpots } = props;
	const renderReports = surfSpots.map((report, index) =>
		<div key={index}>
			<hr/>
			<h3>County: {report.county_name}</h3>
			<p>Lat: {report.latitude}</p>
			<p>Long: {report.longitude}</p>
			<p>ID: {report.spot_id}</p>
			<h4>{report.spot_name}</h4>
			<hr/>
		</div>
		);

	return(
		<div id="report">
			{renderReports}
		</div>
	)
	
}

export default Spots;