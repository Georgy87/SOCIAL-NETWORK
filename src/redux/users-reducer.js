const initialState = {
    users: [],
    pageItems: 4,
    currentPage: 1,
    totalItems: 25
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
        case "USERS": {
            return {
                ...state,
                users: [ ...actions.users ]
            }

        }
        case "CURRENT-PAGE": {
            return {
                ...state,
                currentPage: actions.currentPage
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

export const currentPageActionCreator = (page) => {
    return {
        type: "CURRENT-PAGE",
        currentPage: page
    }
}

export default UsersReducer;
