import React, { Component } from "react";
import { connect } from "react-redux";
import Hours from "./Hours";
import Problems from "./Problems";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <h1>Welcome. Let's get shit done </h1>
        <Hours />
        <Problems />
      </div>
    );
  }
}

export default MainContainer;
