const initialState = {
    users: [],
    pageItems: 4,
    currentPage: 1,
    totalItems: 100,
    preloader: null
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
        case "TOTAL-ITEMS": {
            return {
                ...state,
                totalItems: actions.totalItems
            }
        }
        case "PRELOADER": {
            return {
                ...state,
                preloader: actions.preloader
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

export const totalItemsActionCreator = (total) => {
    return {
        type: "TOTAL-ITEMS",
        totalItems: total
    }
}

export const setPreloaderActionCreator = (preloader) => {
    console.log(preloader);
    return {
        type: "PRELOADER",
        preloader: preloader
    }
}



export default UsersReducer;
