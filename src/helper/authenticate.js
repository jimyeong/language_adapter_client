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
const varifyResponse = (response) => {
    if (!response) return false;
    if (response.status == 401) {
        return false;
    }
    return true;
};

export { signOut, signIn, getLoginStatus, varifyResponse };
