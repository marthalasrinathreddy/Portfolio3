import React, { Component } from "react";
import Widecard from "../components/Widecard";
class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="Bachelor of Technology"
          where="NIT, Surat"
          from="July '16"
          to=" July '20"
          cgpa="9.56"
        />
      </div>
    );
  }
}
export default Education;
