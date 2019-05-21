import React, { Component } from "react";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";

class Sessions extends Component {
  clickHandler = e => {
    console.log("here is the data-id:", e.target.dataset.id);
  };

  render() {
    let sessions = this.props.sessions.map(session => {
      return (
        <li onClick={this.clickHandler} key={session.id} data-id={session.id}>
          {session.title}
        </li>
      );
    });
    return (
      <div>
        <h1>Choose Sessions</h1>
        <ul className="list">{sessions}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessions: state.sessions
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sessions);
