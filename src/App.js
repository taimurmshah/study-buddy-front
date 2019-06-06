import React, { Component } from "react";
import { connect } from "react-redux";
import MainContainer from "./components/MainContainer";
import Sessions from "./components/Sessions";
import NewSessionForm from "./components/NewSessionForm";
import { fetchSessions, createSession } from "./redux/thunks";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    sessionFormOpen: false,
    title: ""
  };

  componentDidMount() {
    this.props.fetchSessions();
  }

  isSessionSelected = () => {
    return !!Object.keys(this.props.currentSession).length > 0;
  };

  didFetchWork = () => {
    return !!this.props.sessions.length > 0;
  };

  submitHandler = e => {
    e.preventDefault();
    if (!this.state.title.length) {
      alert("Please enter valid session title, bitch");
    } else {
      this.props.createSession(this.state.title);
      this.setState({ sessionFormOpen: false });
    }
  };

  changeHandler = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    console.log(Object.keys(this.props.currentSession).length);
    return (
      <div>
        <header id="main-header">
          <div className="container">
            <h1>Study Buddy</h1>
            {this.props.displayDate.length > 0 ? (
              <p>{this.props.displayDate}</p>
            ) : null}
          </div>
        </header>

        <Switch>
          <Route
            path="/session"
            render={() => {
              return (
                <div>
                  {this.isSessionSelected() ? (
                    <MainContainer />
                  ) : (
                    <Redirect to="/" />
                  )}
                </div>
              );
            }}
          />
          <Route
            path="/"
            render={() => {
              return (
                <div>{this.didFetchWork ? <Sessions /> : <h1>Loading</h1>}</div>
              );
            }}
          />
        </Switch>
        {Object.keys(this.props.currentSession).length > 0 ? null : this.state
            .sessionFormOpen ? (
          <NewSessionForm
            submitHandler={this.submitHandler}
            title={this.state.title}
            changeHandler={this.changeHandler}
          />
        ) : (
          <button
            onClick={() => {
              this.setState({ sessionFormOpen: true });
            }}
          >
            Create new session
          </button>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSessions: () => dispatch(fetchSessions()),
    createSession: title => {
      dispatch(createSession(title));
    }
  };
};

const mapStateToProps = state => {
  return {
    currentSession: state.currentSession,
    sessions: state.sessions,
    displayDate: state.displayDate
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
