import React, { Component } from "react";
import { connect } from "react-redux";
import Hours from "./Hours";
import Problems from "./Problems";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to {this.props.title}. Maintain intensity of focus.</h1>
        <Hours />
        <Problems />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

export default connect(mapStateToProps)(MainContainer);
