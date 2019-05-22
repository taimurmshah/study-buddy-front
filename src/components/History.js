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
        <li key={day.id} className="box">
          <div>
            <ul>
              {today}:
              <li>Time Spent Studying: {formatDuration(day.time_studied)}</li>
              <li>Problems Completed: {day.problems}</li>
            </ul>
          </div>
        </li>
      );
    });

    return (
      <div>
        <h1>Study Log</h1>
        <ul id="days">{days}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    days: state.days
  };
};

export default connect(mapStateToProps)(History);
