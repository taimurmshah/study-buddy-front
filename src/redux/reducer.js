const initialState = {
  sessions: {},
  currentSession: {},
  title: "",
  hours: "00:00:00",
  job: false,
  problems: 0,
  id: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SESSIONS":
      let session = action.payload.find(session => session.title === "Test");
      return {
        ...state,
        sessions: action.payload,
        currentSession: session,
        title: session.title,
        hours: session.hours,
        problems: session.problems,
        id: session.id
      };
    case "INCREMENT_PROBLEMS":
      return { ...state, problems: action.payload };
    default:
      return state;
  }
};

export default reducer;
