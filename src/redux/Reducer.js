import * as Types from "./Types";

const initializitState = {
  getData: [],
  userInputData: {
    strProgramTypeName: " ",
    ysnActive: " ",
  },
  submitData: [],
  isloading: "",
};

function Reducer(state = initializitState, action) {
  switch (action.type) {
    case Types.GET_API_DATA:
      console.log(`action.payload`, action.payload);
      return {
        ...state,
        getData: action.payload,
      };
      break;
    case Types.GET_USER_INPUT_DATA:
      return {
        ...state,
        userInputData: action.payload,
      };
      break;
    case Types.SUBMIT_DATA:
      alert("data inserted");
      return {
        ...state,
      };
      break;
      break;
    case Types.isloading:
      return {
        ...state,
        isloading: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
}
export default Reducer;
