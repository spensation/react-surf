import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Spots from './Components/Spots';
import PopularSpots from './Components/PopularSpots';
import ByCounty from './Components/ByCounty';
import { BrowserRouter, Route } from 'react-router-dom';
import { surfSpots, counties } from './data.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route 
              exact path="/surf_spots" 
              render={(props) => <Spots {...props} surfSpots={surfSpots} />}
            />
            <Route
             exact path="/popular"
             render={(props) => <PopularSpots {...props} surfSpots={surfSpots} />}
            />
            <Route 
              exact path="/by_county"
              render={(props) => <ByCounty {...props} counties={counties} />}
            />
          </div>
        </BrowserRouter>
      </div>
      

    );
  }
}

export default App;
