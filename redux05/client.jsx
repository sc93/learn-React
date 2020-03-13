import React from 'react';
import ReactDom from 'react-dom';
import { hot } from'react-hot-loader/root';
import {Provider} from 'react-redux'
import store from './store';
import App from './App.jsx';

const Hot = hot(App);


ReactDom.render(<Provider store ={store}><Hot /></Provider>,document.querySelector('#root'));
