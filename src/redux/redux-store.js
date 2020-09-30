import { combineReducers, createStore, applyMiddleware } from "redux";
import ProfileReducer from "./profile-reducer";
import DialogReducer from "./dialog-reducer";
import FriendsReducer from "./friends-reducer";
import UsersReducer from "./users-reducer";
import userAuthReducer from "./auth-reducer";
import ReduxThunk from "redux-thunk";

const reducers = combineReducers({
    postsPage: ProfileReducer,
    dialogPage: DialogReducer,
    friendsBox: FriendsReducer,
    usersPage: UsersReducer,
    auth: userAuthReducer,
});
const store = createStore(reducers, applyMiddleware(ReduxThunk));
window.store = store;
export default store;
