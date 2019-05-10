export const getSessions = sessions => {
  return {
    type: "GET_SESSIONS",
    payload: sessions
  };
};
