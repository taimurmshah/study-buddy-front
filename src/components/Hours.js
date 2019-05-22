import React, { Component } from "react";
import { connect } from "react-redux";
import Timer from "./Timer";
import formatDuration from "format-duration";
// eslint-disable-next-line
import humanizeDuration from "humanize-duration";

class Hours extends Component {
  state = {
    timer: false
  };

  buttonClick = () => {
    this.setState({ timer: !this.state.timer });
  };

  render() {
    return (
      <div id="test">
        <h3>Total Time Spent Studying: {formatDuration(this.props.hours)}</h3>
        <h3>Amount Studied Today: {formatDuration(this.props.hoursToday)}</h3>
        <div id="timer">
          {this.state.timer ? <Timer /> : <h4>0:00</h4>}
          <button onClick={this.buttonClick}>
            {!this.state.timer ? "Start" : "Stop"}
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    hours: state.hours,
    hoursToday: state.hoursToday
  };
};

export default connect(mapStateToProps)(Hours);
