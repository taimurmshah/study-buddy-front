import { getSessions, incrementProblems } from "./actions";

export const fetchSessions = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/sessions")
      .then(res => res.json())
      .then(res => {
        console.log(res);
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
        session: { type: "Increment", id: id }
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch(incrementProblems(res));
      });
  };
};
