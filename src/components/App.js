import React, { Component } from 'react';
import '../styles/App.css';
import Map from './map/Map';
import Carousel from './common/Carousel';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeDecorStyle: "scandinavian",
    };
    this.toggleDecorStyle = this.toggleDecorStyle.bind(this);
  }

  toggleDecorStyle(decorStyle){
    this.setState({ activeDecorStyle: "rustic" });
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
        <Carousel activeDecorStyle={this.state.activeDecorStyle} decorStyles={decorStyles} toggleDecorStyle={this.toggleDecorStyle} />
        <Map activeDecorStyle={this.state.activeDecorStyle}/>
      </div>
    );
  }
}

export default App;
