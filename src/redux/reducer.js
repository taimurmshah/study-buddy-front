const initialState = {
  sessions: [],
  currentSession: {},
  title: "",
  hours: 0,
  job: false,
  problems: 0,
  id: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SESSIONS":
      // let session = action.payload.find(
      //   // session => session.title === "Interview Prep 2019"
      //   session => session.title === "Test"
      // );
      return {
        ...state,
        sessions: action.payload
      };
    case "INCREMENT_PROBLEMS":
      return { ...state, problems: action.payload };
    case "ADD_TIME":
      return { ...state, hours: action.payload };
    case "SELECT_SESSION":
      return {
        ...state,
        currentSession: action.payload,
        title: action.payload.title,
        hours: action.payload.hours,
        problems: action.payload.problems,
        id: action.payload.id
      };
    default:
      return state;
  }
};

export default reducer;
