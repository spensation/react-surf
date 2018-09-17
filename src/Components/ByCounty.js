import React from 'react';
import CountySpots from './CountySpots';
import { surfSpots } from '../data.js';

class ByCounty extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: true
		}
	}

	toggleHidden = (event) => {
		
	    this.setState({
	      isHidden: !this.state.isHidden
	    })
    }
 

	render() {
		console.log('in ByCounty', this)
		const renderedCounties = this.props.counties.map((county, index) =>
			<div key={index}>
				<h3><button
				  className="county-button"
				  onClick={this.toggleHidden}>
				  {county}
				  </button>
				 </h3>
				  {!this.state.isHidden && <CountySpots surfSpots={surfSpots.filter(spot => spot.county_name === county)} />}
			</div>
			)


		return(
			<div id="report">
				{renderedCounties}
			</div>
		)
	}
	
	
}

export default ByCounty;