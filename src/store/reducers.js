import { combineReducers } from "redux";
import { headerReducer } from "../component/Header/store/header-reducer";
import { inputReducer } from "../component/Calculate/store/input-reducers";

export const rootReducer = combineReducers({
    header: headerReducer,
    input: inputReducer
})