export const getSessions = sessions => {
  return {
    type: "GET_SESSIONS",
    payload: sessions
  };
};

export const incrementProblems = object => {
  return {
    type: "INCREMENT_PROBLEMS",
    payload: object
  };
};

export const addTime = time => {
  return {
    type: "ADD_TIME",
    payload: time
  };
};

export const selectSession = id => {
  return {
    type: "SELECT_SESSION",
    payload: id
  };
};

export const getDays = days => {
  return {
    type: "GET_DAYS",
    payload: days
  };
};
