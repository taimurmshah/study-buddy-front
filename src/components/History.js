import React, { Component } from "react";
import { connect } from "react-redux";
import formatDuration from "format-duration";

class History extends Component {
  render() {
    let days = this.props.days.map(day => {
      console.log(day);
      let today = day.date.split("-");
      today.push(today.shift());
      today[today.length - 1] = today[today.length - 1].substr(2);
      today = today.join("/");
      return (
        <div key={day.id} className="box">
          <ul>
            {today}:
            <li>Time Spent Studying: {formatDuration(day.time_studied)}</li>
            <li>Problems Completed: {day.problems}</li>
          </ul>
        </div>
      );
    });

    return <div className="history-container">{days}</div>;
  }
}

const mapStateToProps = state => {
  return {
    days: state.days
  };
};

export default connect(mapStateToProps)(History);
