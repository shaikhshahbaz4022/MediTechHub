import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import { reducer as userReducer } from "./userReducer/reducer"
import { reducer as authReducer } from "./authReducer/reducer"
import thunk from "redux-thunk"
const rootReducer = combineReducers({
    userReducer,
    authReducer

})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))