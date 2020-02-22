const React = require('react');
const { Component ,useState, useRef } = React;

const WordRelay = () => {
    const [ word, setWord ] = useState('노트북');
    const [ value, setValue ] = useState('');
    const [ result, setResult ] = useState('');
    const onSubmitForm = (e)=> {
        e.preventDefault();
        if(word[word.length-1] === value[0] ) {
            setWord(value);
            setValue('');
            setResult('정답');
        } else {
            setValue('');
            setResult('땡');
        }
        inputRef.current.focus();
    };
    const onChangeInput = (e)=>{
        setValue(e.target.value);
    };
    const inputRef = useRef(null);
    return (
        <>
            <div>{word}</div>
            <form onSubmit = {onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요.</label>
                <input className="clsName" ref = {inputRef} value={value} onChange = {onChangeInput}/>
                <button>클릭!</button>
            </form>
            <div>{result}</div>
        </>
    );
}
module.exports = WordRelay;