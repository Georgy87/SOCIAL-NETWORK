const initialState = {
    users: [
        { id: 1, name: "Anton", followed: true },
        { id: 2, name: "Evgeniy", followed: false },
        { id: 3, name: "Helena", followed: false },
    ],
};

const UsersReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "follow": {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === actions.id) {
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
                    if (user.id === actions.id) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
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

export default UsersReducer;
