import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

window.store = store

export default store