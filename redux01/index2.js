const { createStore } = require('redux');
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ADD_POST = 'ADD_POST';
const reducer = (prevState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...prevState,
                user: action.data
            }

        case LOGOUT:
            return {
                user: '',
                posts: [],
            }

        case ADD_POST:
            return {
                ...prevState,
                posts: [...prevState.posts, action.data],
            }
        default:
            return prevState;
    }
};

const initialState = {
    user: '',
    posts: [],
};
const store = createStore(reducer, initialState);
store.subscribe(() => {
    console.log('changed');
})
console.log('1nd : ', store.getState());
console.log('-------------------------------');
//action
const login = (data) => {
    return {
        type: LOGIN,
        data,
    };
};
const logout = () => {
    return {
        type: LOGOUT,
    };
};
const addPost = (data) => {
    return {
        type: ADD_POST,
        data
    }
}
store.dispatch(login({
    id: 1,
    name: 'shin',
    admin: true
}));
console.log('login : ', store.getState());
console.log('-------------------------------');
store.dispatch(login({
    id: 2,
    name: 'kim',
    admin: true
}));
console.log('login : ', store.getState());
console.log('-------------------------------');
store.dispatch(addPost({
    userId: 2,
    id: 1,
    content: 'hello redux'
}));
console.log('addPost : ', store.getState());
console.log('-------------------------------');
store.dispatch(addPost({
    userId:2,
    id: 2,
    content: 'hello react'
}));
console.log('addPost : ', store.getState());
console.log('-------------------------------');
store.dispatch(logout());
console.log('logout : ', store.getState());
console.log('-------------------------------');


