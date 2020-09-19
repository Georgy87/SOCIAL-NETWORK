import { combineReducers, createStore } from "redux";
import ProfileReducer from "./profile-reducer";
import DialogReducer from "./dialog-reducer";
import FriendsReducer from './friends-reducer';
import UsersReducer from "./users-reducer";

const reducers = combineReducers({
    postsPage: ProfileReducer,
    dialogPage: DialogReducer,
    friendsBox: FriendsReducer,
    usersPage: UsersReducer 
});
const store = createStore(reducers);
export default store;
