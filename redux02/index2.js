const { createStore } = require('redux');
const reducer = require('./reducers/reducer');
const {login, logout} = require('./actions/user');
const addPost = require('./actions/post');
const initialState = {
    user: {
        isLoggingIn : false,
        data : null
    },
    posts: [],
};
const store = createStore(reducer, initialState);

store.subscribe(() => {
    console.log('changed');
})
console.log('1nd : ', store.getState());
console.log('-------------------------------');

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


