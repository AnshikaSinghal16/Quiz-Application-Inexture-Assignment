import { combineReducers } from "redux";
import loginReducer from "./loginSlice";
import quizDataReducer from "./quizDataSlice";


const reducers = combineReducers({
  loginReducer: loginReducer,
  quizDataReducer:quizDataReducer
});

export default reducers;
