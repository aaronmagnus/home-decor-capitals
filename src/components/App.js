import React, { Component } from 'react';
import '../styles/App.css';
import Map from './map/Map';
import Carousel from './common/Carousel';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedDecorStyle: "scandinavian",
    };
  }
  render() {
    const decorStyles = [
      "Scandinavian",
      "Rustic",
      "Contemporary",
      "Minimalist",
      "Vintage",
      "Mid-Century Modern",
      "Example",
      "Coastal",
      "Industrial",
      "Traditional",
      "Bohemian",
      "Eclectic",
    ];
    return (
      <div className="App">
        <Carousel selectedDecorStyle={this.state.selectedDecorStyle} decorStyles={decorStyles} />
        <Map selectedDecorStyle={this.state.selectedDecorStyle}/>
      </div>
    );
  }
}

export default App;
