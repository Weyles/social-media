import { combineReducers, createStore } from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;