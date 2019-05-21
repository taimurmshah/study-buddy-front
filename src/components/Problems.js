import React, { Component } from "react";
import { connect } from "react-redux";
import { patchProblems } from "../redux/thunks";

class Problems extends Component {
  buttonHandler = () => {
    this.props.patchProblems(this.props.id);
  };

  render() {
    return (
      <div>
        <h3>Number of Problems Completed: {this.props.problems} </h3>
        <button onClick={this.buttonHandler}>plus</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    problems: state.problems,
    id: state.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    patchProblems: session => dispatch(patchProblems(session))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Problems);
