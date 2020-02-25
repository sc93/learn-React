import React, {useEffect, useRef, useMemo, memo} from 'react';
import Td from './Td';
const Tr = memo(({rowIndex, rowData, dispatch})=>{
    const ref = useRef([]);
    return (
        <tr>
            {Array(rowData.length).fill().map( (td,i)=> 
                useMemo(()=><Td key = {'td'+((rowIndex+1)*(i+1))} rowIndex ={rowIndex} cellIndex={i} cellData={rowData[i]} dispatch={dispatch}></Td>,[rowData[i]])
            )}
        </tr>
    )
})

export default Tr;