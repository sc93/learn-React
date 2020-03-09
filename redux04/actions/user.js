const login = (data) => {
    return (dispatch, getState) => {
        try {
            dispatch(loginRequest(data));
            setTimeout(() => {
                dispatch(loginSuccess({
                    userId: 1,
                    nickname: 'shin'
                }))
            }, 2000);
        } catch (error) {
            dispatch(loginFail(e));
        }

    }
}
const loginRequest = (data) => {
    return {
        type: 'LOGIN_REQUEST',
        data,
    };
};
const loginSuccess = (data) => {
    return {
        type: 'LOGIN_SUCCESS',
        data,
    };
};
const loginFail =(error)=> {
    return {
        type: 'LOGIN_FAIL',
        error,
    }
}
// const login = (data) => {
//     return {
//         type: 'LOGIN',
//         data,
//     };
// };
const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

module.exports = { login, logout }