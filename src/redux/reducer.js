let today = new Date().toDateString().split(" ");
today.shift();
today[1] = today[1] + ",";
let date = today.join(" ");

const initialState = {
  sessions: [],
  currentSession: {},
  title: "",
  hours: 0,
  job: false,
  problems: 0,
  id: null,
  date: date,
  days: [],
  sessionToday: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SESSIONS":
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
    case "GET_DAYS":
      return {
        ...state,
        days: action.payload,
        date: action.payload[action.payload.length - 1].date
      };
    default:
      return state;
  }
};

export default reducer;
