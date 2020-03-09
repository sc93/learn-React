const {combineReducers} = require('redux');
const userReducer = require('./userReducer');
const postReducer = require('./postReducer');
module.exports = combineReducers({
    user : userReducer,
    posts : postReducer
});