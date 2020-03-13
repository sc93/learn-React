const initialState = {
    isLoggingIn: false,
    data: null
};
const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...prevState,
                isLoggingIn: true,
                data: null
            }
        case 'LOGIN_SUCCESS':
            return {
                ...prevState,
                isLoggingIn: false,
                data: action.data
            }
        case 'LOGIN_FAIL':
            return {
                ...prevState,
                isLoggingIn: false,
                data: null
            }
        case 'LOGOUT':
            return {
                user: {
                    isLoggingIn: false,
                    data: null,
                },
                posts: [],
            }
        default:
            return prevState;
    }
};

module.exports = userReducer;