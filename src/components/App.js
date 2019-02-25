import React, { Component } from 'react';
import '../styles/App.css';
import Map from './map/Map';
import Carousel from './common/Carousel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDecorStyle: "scandinavian",
    };
    this.toggleDecorStyle = this.toggleDecorStyle.bind(this);
  }

  // Function to test a change in the activeDecorStyle
  toggleDecorStyle(decorStyle) {
    let newStyle = decorStyle.toLowerCase();
    console.log(newStyle);
    this.setState({ activeDecorStyle: newStyle });
  };

  render() {
    const decorStyles = [
      "Scandinavian",
      "Rustic",
      "Contemporary",
      "Minimalist",
      "Vintage",
      "Mid-Century Modern",
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
