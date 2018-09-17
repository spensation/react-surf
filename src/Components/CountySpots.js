import React from 'react';
import { Link} from 'react-router-dom';

const CountySpots = (props) => {
	
	const renderedCountySpots = props.surfSpots.map((countySpot, index) => 
		<div key={index}>
			<ul className="county-list">
			<p>Lat: {countySpot.latitude}</p>
			<p>Long: {countySpot.longitude}</p>
			<p>ID: {countySpot.spot_id}</p>
			<li className="county-list-item"><Link to={`/surf_spots/${countySpot.spot_id}`}>{countySpot.spot_name}</Link></li>
			</ul>
		</div>
	)
	console.log('in CountySpots', props)
	return(
		<div className='modal'>
			{renderedCountySpots}
		</div>
	)
	
}

export default CountySpots;