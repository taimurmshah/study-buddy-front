import React, { Component } from "react";
import { connect } from "react-redux";
import Hours from "./Hours";
import Problems from "./Problems";
import History from "./History";
import { clearSession } from "../redux/actions";

class MainContainer extends Component {
  componentWillUnmount() {
    this.props.clearSession();
  }

  render() {
    return (
      <div>
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
        </div>
        <div id="history">
          <h1>Study Log</h1>
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

const mapDispatchToProps = dispatch => {
  return {
    clearSession: () => dispatch(clearSession())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
