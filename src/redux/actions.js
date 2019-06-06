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

export const updateSessions = session => {
  return {
    type: "UPDATE_SESSIONS",
    payload: session
  };
};

export const clearSession = () => {
  return {
    type: "CLEAR_SESSION"
  };
};
