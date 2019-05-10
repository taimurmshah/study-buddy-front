import { getSessions } from "./actions";

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
