import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';

import NumberBaseBall from '../../lecture04/app/NumberBaseball';
import RSP from '../../lecture06/app/RSP';
import Lotto from '../../lecture07/app/Lotto';

class GameMatcher extends Component {
    render() { 
        let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
        console.log(urlSearchParams.get('name'))
        return ( 
            <h1>게임매쳐</h1>
         );
    }
}
 
export default GameMatcher;