import React, { useCallback, useEffect, useRef, memo } from 'react';
import {CLICK_CELL} from './TicTacToe'
const Td =  memo( ({ rowIndex, cellIndex, cellData,dispatch })  => {
    const onClickTd = useCallback(()=> {
        if(cellData){
            return;
        }
        dispatch({
            type: CLICK_CELL,
            row : rowIndex,
            cell : cellIndex,
        })
        // dispatch({
        //     type:SET_TURN,
        // })
    },[cellData]);
    return (
            <td onClick={onClickTd}>{cellData}</td>
    )
})

export default Td;