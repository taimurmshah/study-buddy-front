import React, { Component } from "react";
import { connect } from "react-redux";
import formatDuration from "format-duration";
import { Button } from "semantic-ui-react";

class Timer extends Component {
  componentDidMount() {
    setInterval(() => this.setState({ time: (this.state.time += 1000) }), 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  state = {
    timer: false,
    time: 0
  };

  buttonClick = () => {
    this.setState({ timer: !this.state.timer });
  };

  keepTime = () => {};

  render() {
    return (
      <div>
        <h4>{formatDuration(this.state.time)}</h4>
      </div>
    );
  }
}

export default connect()(Timer);
