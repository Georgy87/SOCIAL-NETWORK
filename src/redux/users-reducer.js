const initialState = {
    users: [
        { id: 1, name: "Anton", followed: true, text: "follow" },
        { id: 2, name: "Evgeniy", followed: false, text: "unfollow"  },
        { id: 3, name: "Helena", followed: false, text: "unfollow"  },
    ],
};

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
