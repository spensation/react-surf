import React from 'react';
import image from '../Assets/Images/surf.jpg';

const SinglePage = (props) => {
	const spotId = props.match.params.spot_id
	const filteredSpot = props.surfSpots.filter(spot => spot.spot_id == spotId)
	console.log('in Single', filteredSpot)
	const renderedSpot = filteredSpot.map((spot, index) =>
		<div key={index}>
			<h1>{spot.spot_name}</h1>
			<img src={image} width='400' alt="surf spot"/>
			<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing 
			elit. Duis venenatis lacus at tellus pharetra efficitur. Nullam hendrerit 
			ligula eros, vel dignissim tellus molestie quis. Donec venenatis erat in 
			faucibus imperdiet. Donec nec nibh libero. Sed sit amet nibh at libero 
			hendrerit pretium ac eget ante. Ut non nisl vel dolor pellentesque dictum vel 
			quis augue. Integer sit amet massa lacus. Aenean ut eros id augue feugiat 
			tristique sit amet vitae purus. Class aptent taciti sociosqu ad litora torquent 
			r conubia nostra, per inceptos himenaeos. Phasellus auctor, urna quis 
			pellentesque lobortis, metus sem rutrum eros, sit amet commodo dolor nulla a 
			velit. Curabitur tincidunt efficitur quam in varius. Aliquam erat volutpat. 
			Maecenas finibus massa sapien, et dignissim nibh viverra in. Phasellus non 
			metus quis lectus auctor egestas cursus ut augue. Praesent porttitor faucibus 
			odio, in aliquam tellus scelerisque ut. Suspendisse potenti.</p>
		</div>
		)

	return(
		<div>
			{renderedSpot}
		</div>
	)
}

export default SinglePage;