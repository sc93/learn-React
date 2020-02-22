import React, {useState, useRef} from 'react';

const Check = () => {
    const [state,setState] = useState('waiting');
    const [message,setMessage] = useState('클릭해서 시작하세요.');
    const [result,setResult] = useState([]);
     
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();
    
    const onClickScreen = () => {
        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금클릭');
            }, Math.floor(Math.random() * 1000) + 2000);
            startTime.current = new Date();
        } else if (state === 'ready') {
            setState('waiting');
            setMessage('너무 성급하시네요. 다시 클릭해서 시작하세요.');
            clearTimeout(timeout.current);
        } else if (state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult((prevResult) => {
                return [ ...prevResult, endTime.current - startTime.current]
            })
        }
    }

    const renderAverage = () => {
        return result.length === 0 ? null : <><div>평균시간 : {result.reduce((a, b) => a + b) / result.length}ms</div><button onClick={Reset}>리셋</button></>
    }
    const Reset = ()=>{
        setResult([]);
    }
    return (
        <>
            <div id='screen' className={state} onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}
        </>
    );

}
export default Check;