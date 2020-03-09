const { createStore, compose, applyMiddleware } = require('redux');
const reducer = require('./reducers/reducer');
const { login, logout } = require('./actions/user');
const addPost = require('./actions/post');
const initialState = {
    user: {
        isLoggingIn: false,
        data: null
    },
    posts: [],
};
const loggingMiddleware = (store) => (next) => (action) => {
    console.log('loggingMiddleware start : ', action);
    next(action);
};
const thunkMiddleware = (store) => (next) => (action) => {
    // console.log('thunkMiddleware start : ',action);
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }
    next(action);
}
const enhancer = applyMiddleware(
    loggingMiddleware,
    thunkMiddleware
);

const store = createStore(reducer, initialState, enhancer);

store.subscribe(() => {
    console.log('changed');
});

store.dispatch(login({
    id: 1,
    name: 'shin',
    admin: true
}));
// store.dispatch(login({
//     id: 2,
//     name: 'kim',
//     admin: true
// }));

// store.dispatch(addPost({
//     userId: 2,
//     id: 1,
//     content: 'hello redux'
// }));

// store.dispatch(addPost({
//     userId:2,
//     id: 2,
//     content: 'hello react'
// }));

// store.dispatch(logout());


