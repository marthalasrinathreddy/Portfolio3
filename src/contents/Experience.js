import React, { Component } from "react";
import Widecard2 from "../components/Widecard2";
class Experience extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Experience</h1>
        <Widecard2
          title="D. E. Shaw India Private Limited"
          position="Member Technical"
          where="Hyderabad"
          from="July '20"
          to="Current"
          desc1="Working on the main trading infrastructure of the firm, which supports large ways of trading in the market"
          desc2="Created an automation, which takes care of monthly release of production code"
          desc3="Working on migration of code for supporting a new site of trading"
        />
        <Widecard2
          title="D. E. Shaw India Private Limited"
          position="Intern"
          where="Hyderabad"
          from="May '19"
          to="July '19"
          desc1='Worked on the Project "Fix-filler Support for Spreads/"'
          desc2="The project is a simulator which mocks the trading of spreads(Related stocks) in the market"
          desc3="Supports the simulation of more than 10 million trades in a second"
        />
        <Widecard2
          title="MLPACK"
          position="Contributor"
          where="Online"
          from="Dec. '17"
          to="Apr. '18"
          desc1="Contributed to Open Source C++ Machine Learning Library for several algorithms like NADAM, NADAMAX etc."
          desc2="The library is currently used across various languages including python"
          desc3="Reliable code, which has no issues reported till now"
        />
      </div>
    );
  }
}
export default Experience;
