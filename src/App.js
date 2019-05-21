import React, { Component } from "react";
import { connect } from "react-redux";
import MainContainer from "./components/MainContainer";
import Sessions from "./components/Sessions";
import { fetchSessions } from "./redux/thunks";
import "./App.css";
// import { Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchSessions();
  }

  render() {
    return (
      <div>
        <header id="main-header">
          <div className="container">
            <h1>Study Buddy</h1>
          </div>
        </header>

        {this.props.sessions.length > 0 ? (
          Object.keys(this.props.currentSession).length > 0 ? (
            <MainContainer />
          ) : (
            <Sessions />
          )
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSessions: () => dispatch(fetchSessions())
  };
};

const mapStateToProps = state => {
  return {
    currentSession: state.currentSession,
    sessions: state.sessions
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
