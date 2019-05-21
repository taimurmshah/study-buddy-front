import React, { Component } from "react";
import { connect } from "react-redux";
import formatDuration from "format-duration";
import { Button } from "semantic-ui-react";
import { patchHours } from "../redux/thunks";

class Timer extends Component {
  componentDidMount() {
    setInterval(() => this.setState({ time: this.state.time + 1000 }), 1000);
  }

  componentWillUnmount() {
    clearInterval();
    this.props.patchHours(this.props.id, this.state.time);
  }

  state = {
    time: 0
  };

  render() {
    return (
      <div>
        <h4>{formatDuration(this.state.time)}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    patchHours: (id, hours) => dispatch(patchHours(id, hours))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
