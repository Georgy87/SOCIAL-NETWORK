import { combineReducers, createStore } from "redux";
import ProfileReducer from "./profile-reducer";
import DialogReducer from "./dialog-reducer";
import FriendsReducer from './friends-reducer';

const reducers = combineReducers({
    postsPage: ProfileReducer,
    dialogPage: DialogReducer,
    friendsBox: FriendsReducer
});
const store = createStore(reducers);
export default store;
