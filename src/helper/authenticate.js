const LOGIN_SCHEME = {
    IS_LOGIN: 'isLogin',
};
const signIn = () => {
    sessionStorage.setItem(LOGIN_SCHEME.IS_LOGIN, '1');
};
const signOut = () => {
    sessionStorage.setItem(LOGIN_SCHEME.IS_LOGIN, '-1');
};
const getLoginStatus = () => {
    return sessionStorage.getItem(LOGIN_SCHEME.IS_LOGIN);
};

export { signOut, signIn, getLoginStatus };
