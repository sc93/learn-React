const React = require('react');
const { Component ,useState, useRef } = React;
const Try = require('./Try.jsx');
const getNumbers = function() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i<4; i++) {
        const num = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(num);
    }
    return array;
}

const NumberBaseball = () =>{
    const [result,setResult] = React.useState('');
    const [value,setValue] = React.useState('');
    const [answer,setAnswer] = React.useState(getNumbers());
    const [tries,setTries] = React.useState([]);
    const refInput = useRef(null);
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value === answer.join('')) {
            setResult('홈런');
            setTries((prevTries)=>[...prevTries, { try : value , result : '홈런'}]);
        } else {
            const answerArray = value.split('').map((v)=> parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length>=9) {
                setResult('10번 넘게 틀려서 실패');
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for(let i = 0; i<4; i++) {
                    if(answerArray[i] === answer[i]) {
                        strike += 1;
                    } else {
                        ball += 1;
                    }
                }
                setTries((prevTries)=>[...prevTries, { try : value , result : `${strike} 스트라이크 ${ball} 볼`}]);
                setValue('');
            }
        }
        refInput.current.focus();
    };
    const onChangeInput = (e) => {
        console.log(answer);
        setValue(e.target.value);
    }

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit = {onSubmitForm}>
                <input ref = {refInput} maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>
                시도 : { tries.Length}
            </div>
            <ul>
                {
                    tries.map((v,i)=>{
                        return (
                            <Try key={`${i}번째 시도`} v={v} i={i}/>
                        );
                    })
                }
            </ul>
        </>
    )
}

module.exports = NumberBaseball;