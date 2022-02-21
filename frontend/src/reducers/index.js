import { combineReducers } from "redux";
import authReducer from "./authReducer";
import backlogReducer from "./backlogReducer";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
    errors: errorReducer,
    projects: projectReducer,
    backlog: backlogReducer,
    auth: authReducer
});