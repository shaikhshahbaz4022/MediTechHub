import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import { reducer as userReducer } from "./userReducer/reducer"
import thunk from "redux-thunk"
const rootReducer = combineReducers({
    userReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))