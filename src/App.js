import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Spots from './Components/Spots';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route exact path="/spots" component={Spots} />
          </div>
        </BrowserRouter>
      </div>
      

    );
  }
}

export default App;
