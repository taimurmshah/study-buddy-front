const initialState = {
  sessions: [],
  currentSession: {},
  title: "",
  hours: 0,
  job: false,
  problems: 0,
  id: null,
  date: "",
  days: [],
  sessionToday: {},
  hoursToday: 0,
  displayDate: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SESSIONS":
      return {
        ...state,
        sessions: action.payload
      };
    case "INCREMENT_PROBLEMS":
      return {
        ...state,
        problems: action.payload.total,
        problemsToday: action.payload.today
      };
    case "ADD_TIME":
      return {
        ...state,
        hours: action.payload.hours,
        hoursToday: action.payload.time_today
      };
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
      let today = action.payload[action.payload.length - 1].date;
      let date = today.split("-");
      date.push(date.shift());
      date[date.length - 1] = date[date.length - 1].substr(2);
      date = date.join("/");
      return {
        ...state,
        days: action.payload,
        date: today,
        displayDate: date,
        hoursToday: action.payload[action.payload.length - 1].time_studied,
        problemsToday: action.payload[action.payload.length - 1].problems
      };
    default:
      return state;
  }
};

export default reducer;
