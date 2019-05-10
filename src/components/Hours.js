import React, { Component } from "react";
import { connect } from "react-redux";

class Hours extends Component {
  render() {
    return (
      <div>
        <h3>Time Spent Studying: {this.props.hours}</h3>
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
