import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { projectReducer } from "./Project/Reducer";
import { chatReducer } from "./Chat/Reducer";

const rooReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    chat: chatReducer
})
export const store = legacy_createStore(rooReducer, applyMiddleware(thunk));