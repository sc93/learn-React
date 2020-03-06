const initialState = {
    isLoggingIn : false,
    data : null
};
const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...prevState,
                isLoggingIn:true,
                data: action.data
            }

        case 'LOGOUT':
            return {
                user: {
                    isLoggingIn : false,
                    data : null,
                },
                posts: [],
            }
        default:
            return prevState;
    }
};

module.exports = userReducer;