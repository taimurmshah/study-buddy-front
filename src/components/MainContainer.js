import React, { Component } from "react";
import { connect } from "react-redux";
import Hours from "./Hours";
import Problems from "./Problems";
import History from "./History";

class MainContainer extends Component {
  render() {
    return (
      <div className="main-page">
        <div className="box1">
          <h1>Welcome to {this.props.title}. Maintain intensity of focus.</h1>
        </div>
        <div className="box2">
          <Hours />
        </div>
        <div className="box3">
          <Problems />
        </div>
        <div className="box4">
          <History />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    displayDate: state.displayDate
  };
};

export default connect(mapStateToProps)(MainContainer);
