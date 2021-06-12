import thunk from "redux-thunk";
import { bindActionCreators } from "redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "../RootReducer";
const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];

const composedEnhancers = composeWithDevTools(...enhancers);

export default function Store(previousState) {
  const Store = createStore(RootReducer, previousState, composedEnhancers);
  return Store;
}
