const { produce } = require('immer')
console.log(produce)
const initialState = {
    isLoggingIn: false,
    data: null
};
const userReducer = (prevState = initialState, action) => {
    return produce(prevState, draft => {
        switch (action.type) {
            case 'LOGIN_REQUEST':
                draft.isLoggingIn = true;
                draft.data = null;
                break;
            case 'LOGIN_SUCCESS':
                draft.isLoggingIn = false;
                draft.data = action.data;
                break;
            case 'LOGIN_FAIL':
                draft.isLoggingIn = false;
                draft.data = null;
                break;
            case 'LOGOUT':
                draft.isLoggingIn = false;
                draft.data = null;
                break;
            default:
                break;
        }
    })
};

module.exports = userReducer;