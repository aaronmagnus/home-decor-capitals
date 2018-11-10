import React, { Component } from "react";
import tooltip from "wsdm-tooltip";

class Header extends Component {
  constructor() {
    super();
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  componentDidMount() {
    this.tip = tooltip();
    this.tip.create();
  }
  handleMouseMove(geography, evt) {
    this.tip.show(`
      <div class="tooltip-inner">
        <span>Hello world</span>
      </div>
    `);
    this.tip.position({ pageX: 10, pageY: 10 });
  }
  handleMouseLeave() {
    this.tip.hide();
  }
  render() {
    return(
    <div
      onMouseMove={this.handleMouseMove}
      onMouseLeave={this.handleMouseLeave}
    >
      <h1>hello world</h1>
    </div>
    )
  }
}

export default Header;