import React, { useState } from 'react';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import NumberBaseBall from '../../lecture04/app/NumberBaseball';
import RSP from '../../lecture06/app/RSP';
import Lotto from '../../lecture07/app/Lotto';
import GameMathcer from './GameMatcher';
const Game = () => {
    const [title, setTitle] = useState('');
    return (
        <BrowserRouter>
            <div>
                <span>공통인부분</span>
                <ul>
                    <li><Link to="/game/number-baseball?query=value&name=shin&sex=male">숫자야구 </Link></li>
                    <li><Link to="/game/rock-scissors-paper">가위바위보 </Link></li>
                    <li><Link to="/game/lotto-generator">로또 </Link></li>
                    <li><Link to="/game/index">게임매쳐 </Link></li>
                </ul>
            </div>
            <div>
                <Route path="/game/:name" component={GameMathcer}/>
            </div>
        </BrowserRouter>
    )
}

export default Game;