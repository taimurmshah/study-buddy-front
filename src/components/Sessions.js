import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSession } from "../redux/actions";
// import { withRouter } from "react-router-dom";

class Sessions extends Component {
  clickHandler = e => {
    let id = parseInt(e.target.dataset.id);
    let session = this.props.sessions.find(session => {
      return session.id === id;
    });
    console.log("here's the session:", session);
    this.props.selectSession(session);
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
  return {
    selectSession: session => dispatch(selectSession(session))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sessions);
