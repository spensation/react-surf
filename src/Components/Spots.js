import React from 'react';

class Spots extends React.Component {

	state = {
		report: []
	}

	componentDidMount() {
		const _this = this;
		fetch('http://www.spitcast.com/api/spot/all')
		  .then(function(response) {
		    return response.json();
		  })
		  .then(function(myJson) {
		    console.log(JSON.stringify(myJson));
		    _this.setState({
		    	report: myJson
		    })
		  });
	}

	render() {
		const renderReports = this.state.report.map((report, index) =>
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
	
}

export default Spots;