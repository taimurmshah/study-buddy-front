import React, { Component } from "react";
import { connect } from "react-redux";
import Timer from "./Timer";
import formatDuration from "format-duration";
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
      <div>
        <h3>Time Spent Studying: {formatDuration(this.props.hours)}</h3>
        {this.state.timer ? <Timer /> : <h4>0:00</h4>}
        <button onClick={this.buttonClick}>
          {!this.state.timer ? "Start" : "Stop"}
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    hours: state.hours
  };
};

export default connect(mapStateToProps)(Hours);
