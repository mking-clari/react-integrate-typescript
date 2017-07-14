import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as typescriptCounterReducer } from "typescript-counter";

const { reducer: javascriptCounterReducer } = require("javascript-counter");

export default combineReducers({
    javascriptCounter: javascriptCounterReducer,
    typescriptCounter: typescriptCounterReducer,
});
