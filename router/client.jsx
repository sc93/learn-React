
import React from 'react';
import ReactDom from 'react-dom';
import { hot } from'react-hot-loader/root';
import Game from './app/Game.jsx';
const Hot = hot(Game);


ReactDom.render(<Hot />,document.querySelector('#root'));
