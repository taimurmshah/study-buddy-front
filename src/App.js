import React, { Component } from "react";
import { connect } from "react-redux";
import MainContainer from "./components/MainContainer";
import { fetchSessions } from "./redux/thunks";

class App extends Component {
  componentDidMount() {
    this.props.fetchSessions();
  }

  render() {
    return (
      <div>
        <MainContainer />
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
