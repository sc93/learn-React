import React, { useEffect, memo } from 'react';
import Tr from './Tr';
const Table = memo(({onClick, tableData, dispatch})=>{
    return (
        <table>
            <tbody>
                {Array(tableData.length).fill().map((tr,i)=>(
                    <Tr key={('tr'+(i+1))} rowIndex = {i} rowData ={tableData[i]} dispatch={dispatch}></Tr>
                ))}
            </tbody>
        </table>
        
    )
});

export default Table;