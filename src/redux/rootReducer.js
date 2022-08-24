import { combineReducers } from "redux";
import appInfoReducer from "./appName/appNameReducer";
import blogReducer from "./blog/reducer";

export const rootReducer = combineReducers({
    appInfo: appInfoReducer,
    blogs: blogReducer
})