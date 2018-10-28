import React, { Component } from 'react';
import '../styles/App.css';
import Map from './map/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
