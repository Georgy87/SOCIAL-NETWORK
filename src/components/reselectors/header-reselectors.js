export const getLogin = (state) => {
    const { auth } = state;
    return auth.login;
};
export const getIsAuth = (state) => {
    const { auth } = state;
    return auth.isAuth;
};
export const getAuthUserId = (state) => {
    const { auth } = state;
    return auth.userProfileAuth;
};
