import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import request from "axios";
import mapJSON from "./110m";
import decorJSON from "./decor-styles";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const cityScale = scaleLinear()
  .domain([0,37843000])
  .range([1,10])

class Map extends Component {
  constructor() {
    super();
    this.state = {
      style: "",
      cities: [],
    };
    this.fetchCities = this.fetchCities.bind(this);
  }
  componentDidMount() {
    this.fetchCities()
  }
  fetchCities() {
    this.setState({
      cities: decorJSON,
    });
  }
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{ scale: 205 }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography={mapJSON}>
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: "#ECEFF1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#ECEFF1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#ECEFF1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  ))}
            </Geographies>
            <Markers>
              {
                this.state.cities.map((city, i) => (
                  <Marker key={i}
                          marker={city}
                          style={{
                            default: {
                              fill: "#fff",
                              stroke: "#DEDEDE",
                              strokeWidth: "1",
                            },
                            hover:   { fill: "#999" },
                            pressed: { fill: "#000" },
                          }}
                  >
                    <circle
                      cx={0}
                      cy={0}
                      r={cityScale(city.population)}
                    />
                  </Marker>
                ))
              }
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default Map;