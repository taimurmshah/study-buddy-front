import React, { Component } from "react";
import { connect } from "react-redux";

class NewSessionForm extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <form action="">
          <p>Enter Session Title:</p>
          <input
            onChange={this.props.changeHandler}
            type="text"
            name="title"
            value={this.props.title}
          />
          <button onClick={this.props.submitHandler}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewSessionForm);
