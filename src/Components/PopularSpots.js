import React from 'react';

const PopularSpots = (props) => {
	console.log(props)
	const { surfSpots } = props;
	const filteredSpots = surfSpots.filter(spot => spot.spot_id < 11);
	const renderedPopularSpots = filteredSpots.map((spot, index) =>
		<div key={index}>
			<hr/>
			<h3>County:   {spot.county_name}</h3>
			<p>Lat: {spot.latitude}</p>
			<p>Long: {spot.longitude}</p>
			<p>ID: {spot.spot_id}</p>
			<h4>{spot.spot_name}</h4>
			<hr/>
		</div>
		);
	return(
		<div id="report">
			{renderedPopularSpots}
		</div>
	)
	
}

export default PopularSpots;