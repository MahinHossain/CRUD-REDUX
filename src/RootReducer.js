import { combineReducers } from "redux";
import Reducer from "./redux/Reducer";

const RootReducer = combineReducers({
  reducer: Reducer,
});
export default RootReducer;
