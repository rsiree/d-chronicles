import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { catReducer, mainReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  mData: mainReducer,
  cData: catReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

console.log("store", store.getState());
