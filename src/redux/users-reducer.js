const initialState = {
    users: [],
};
console.log(initialState)
const UsersReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "follow": {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === actions.userId) {
                        console.log(user.id);
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        }
        case "unfollow": {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === actions.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        }
        case "USERS": {
            return {
                ...state,
                users: [ ...state.users, ...actions.users ]
            }

        }
        default :
            return state;
    }
};

export const followActionCreator = (id) => {
    return {
        type: "follow",
        userId: id,
    };
};

export const unfollowActionCreator = (id) => {
    return {
        type: "unfollow",
        userId: id,
    };
};

export const setUsersActionCreator = (user) => {
    return {
        type: "USERS",
        users: user
    }
}

export default UsersReducer;
