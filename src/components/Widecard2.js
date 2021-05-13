import React, { Component } from "react";
class Widecard2 extends Component {
  render() {
    return (
      <div class="widecard">
        <div class="compdet">
          <h3>{this.props.title}</h3>
          <h4 class="secondtext">{this.props.position}</h4>
          <h4 class="secondtext">
            {this.props.from} - {this.props.to}
          </h4>
          <h4>Location : {this.props.where}</h4>
          
          <h4>{this.props.desc1}</h4>
          <h4>{this.props.desc2}</h4>
          <h4>{this.props.desc3}</h4>
        </div>
      </div>
    );
  }
}
export default Widecard2;
