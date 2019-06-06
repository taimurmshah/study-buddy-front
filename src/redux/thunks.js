import {
  getSessions,
  incrementProblems,
  addTime,
  getDays,
  updateSessions
} from "./actions";

export const fetchSessions = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/sessions")
      .then(res => res.json())
      .then(res => {
        dispatch(getSessions(res));
      });
  };
};

export const patchProblems = id => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/sessions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        session: { type: "increment_problems", id: id }
      })
    })
      .then(res => res.json())
      .then(res => {
        dispatch(incrementProblems(res));
      });
  };
};

export const patchHours = (id, hours) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/sessions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        session: { hours: hours, id: id, type: "add_time" }
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch(addTime(res));
      });
  };
};

export const fetchDays = id => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/session-days", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        session: { id: id }
      })
    })
      .then(res => res.json())
      .then(res => {
        dispatch(getDays(res));
      });
  };
};

export const createSession = title => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        session: { title }
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch(updateSessions(res));
      });
  };
};
