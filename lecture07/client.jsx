
import React from 'react';
import ReactDom from 'react-dom';
import { hot } from'react-hot-loader/root';
import Lotto from './app/Lotto.jsx';
const Hot = hot(Lotto);


ReactDom.render(<Hot />,document.querySelector('#root'));
