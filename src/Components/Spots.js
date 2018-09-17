import React from 'react';
import { Link } from 'react-router-dom'

const Spots = (props) => {
	console.log(props)
	const { surfSpots } = props;
	const renderSpots = surfSpots.map((spot, index) =>
		<div key={index}>
			<hr/>
			<h3>{spot.county_name} County</h3>
			<p>Lat: {spot.latitude}</p>
			<p>Long: {spot.longitude}</p>
			<p>ID: {spot.spot_id}</p>
			<h4><Link to={`/surf_spots/${spot.spot_id}`}>{spot.spot_name}</Link></h4>
			<hr/>
		</div>
		);

	return(
		<div id="report">
			{renderSpots}
		</div>
	)
	
}

export default Spots;