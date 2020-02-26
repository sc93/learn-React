
import React from 'react';
import ReactDom from 'react-dom';
import { hot } from'react-hot-loader/root';
import MineSearch from './app/MineSearch.jsx';
const Hot = hot(MineSearch);


ReactDom.render(<Hot />,document.querySelector('#root'));
