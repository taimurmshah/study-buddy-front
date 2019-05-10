export const getSessions = sessions => {
  return {
    type: "GET_SESSIONS",
    payload: sessions
  };
};

export const incrementProblems = number => {
  return {
    type: "INCREMENT_PROBLEMS",
    payload: number
  };
};
