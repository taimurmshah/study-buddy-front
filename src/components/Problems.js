import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";

class Problems extends Component {
  render() {
    return (
      <div>
        <h3>Number of Problems Completed: {this.props.problems} </h3>
        <Button icon size="mini">
          <Icon name="plus" />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    problems: state.problems
  };
};

export default connect(mapStateToProps)(Problems);
