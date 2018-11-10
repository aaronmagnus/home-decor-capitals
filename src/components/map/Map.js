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
import mapJSON from "./data/110m";
import decorCSV from "./data/dummy-data.csv";
import PapaParse from "papaparse";
import tooltip from "wsdm-tooltip";

const wrapperStyles = {
  width: "100%",
  maxWidth: 1080,
  margin: "0 auto",
};

const cityScale = scaleLinear()
  .domain([100,1000])
  .range([6,20]);

class Map extends Component {
  constructor() {
    super();
    this.state = {
      decorStyle: "scandinavian",
      data: [],
    };
    this.updateData = this.updateData.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  componentDidMount() {
    this.fetchData();
    this.tip = tooltip();
  }

  fetchData() {
    PapaParse.parse(decorCSV, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData,
    });
  }

  updateData(result) {
    const data = result.data;
    this.setState({
      data: data,
    });
  }

  handleMouseMove(marker, evt) {
    this.tip.show(`
      <div class="tooltip-inner">
        ${marker.location.city.city}
      </div>
    `);
    this.tip.position({ pageX: evt.pageX, pageY: evt.pageY });
  }

  handleMouseLeave() {
    this.tip.hide();
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
                this.state.data.map((city, i) =>
                  city[this.state.decorStyle].length !== 0 && (
                    <Marker key={i}
                            marker={{
                              coordinates: [ city.long, city.lat ],
                              location: {city}
                            }}
                            texting={"text"}
                            onMouseMove={this.handleMouseMove}
                            onMouseLeave={this.handleMouseLeave}
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
                      r={cityScale(city[this.state.decorStyle])}
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