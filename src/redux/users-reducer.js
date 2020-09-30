import { usersApi } from "../components/api/api";
const initialState = {
    users: [],
    pageItems: 10,
    currentPage: 1,
    totalItems: 1000,
    preloader: null,
    transformPage: 0,
    arrayForDisable: [],
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
        case "TRANSFORM-PAGE": {
            return {
                ...state,
                transformPage: actions.transformPage
            }
        }
        case "SET-ARRAY-FOR-DISABLE" : {
            return {
                ...state,
                arrayForDisable: actions.truth ?
                [...state.arrayForDisable, actions.userId] :
                [...state.arrayForDisable.filter(el => el ==='k')]
            }
        }

        default :
            return state;
    }
};

export const follow = (id) => {
    return {
        type: "follow",
        userId: id,
    };
};

export const unfollow = (id) => {
    return {
        type: "unfollow",
        userId: id,
    };
};

export const setUsers = (user) => {
    return {
        type: "USERS",
        users: user
    }
}

export const currentPage = (page) => {
    return {
        type: "CURRENT-PAGE",
        currentPage: page
    }
}

export const totalItems= (total) => {
    return {
        type: "TOTAL-ITEMS",
        totalItems: total
    }
}

export const preloader = (preloader) => {
    return {
        type: "PRELOADER",
        preloader: preloader
    }
}

export const transformPage = (number) => {
    return {
        type: "TRANSFORM-PAGE",
        transformPage: number
    }
}

export const setArrayForDisable = (truth, userId) => {
    console.log(truth, userId);
    return {
        type: "SET-ARRAY-FOR-DISABLE",
        userId: userId,
        truth: truth
    }
}

export const getUsersActionCreator = (currentPage, pageItems) => {

    return (dispatch) => {
        dispatch(preloader(true));
        usersApi.getUser(currentPage, pageItems).then(
            (data) => {
                dispatch(preloader(false));
                dispatch(setUsers(data.items));
                // this.props.totalItems(data.totalCount);
            }
        );
    }
}

export const changeUsersActionCreator = (page, pageItems) => {

    return (dispatch) => {
        dispatch(preloader(true));
        dispatch(currentPage(page));
        usersApi.getUserPagination(page, pageItems).then((data) => {
            dispatch(preloader(false));
            dispatch(setUsers(data.items));
        });
    }
}

export const onChangeUsersNextActionCreator = (page, pageItems) => {
    return (dispatch) => {
        dispatch(preloader(true));
        page++;
        dispatch(currentPage(page));
        dispatch(transformPage(page));

        usersApi.getUserPagination(page, pageItems).then((data) => {
            dispatch(preloader(false));
            dispatch(setUsers(data.items));
        });
    }
}

export const onChangeUsersPrevActionCreator = (page, pageItems) => {
    return (dispatch) => {
        dispatch(preloader(true));
        page--;
        dispatch(currentPage(page));
        dispatch(transformPage(page));

        usersApi.getUserPagination(page, pageItems).then((data) => {
            dispatch(preloader(false));
            dispatch(setUsers(data.items));
        });
    }
}

export default UsersReducer;
