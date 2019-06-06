import React, { Component } from "react";
import { connect } from "react-redux";

class NewSessionForm extends Component {
  state = {
    title: ""
  };

  render() {
    return (
      <div>
        <h1>New Session Form</h1>
      </div>
    );
  }
}

export default connect()(NewSessionForm);
