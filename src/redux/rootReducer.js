import { combineReducers } from "redux";
import appInfoReducer from "./appName/appNameReducer";

export const rootReducer = combineReducers({
    appInfo: appInfoReducer,
})