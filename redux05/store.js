const { createStore, compose, applyMiddleware } = require('redux');
const reducer = require('./reducers/reducer');
const {composeWithDevTools} = require('redux-devtools-extension')
// const { login, logout } = require('./actions/user');
// const addPost = require('./actions/post');
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
const enhancer = composeWithDevTools(
    applyMiddleware(loggingMiddleware,thunkMiddleware)
    );

const store = createStore(reducer, initialState, enhancer);

module.exports = store;

