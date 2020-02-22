const React = require('react');
const {useState, useRef} = React;
const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const onChangeInput = (e) => {
        setValue(e.target.value);
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === parseInt(first) * parseInt(second)) {
            // 값을 바꾸기전 현재 state를 써야할때 아래와 같이 state를 리턴하는 함수를 작성
            setResult((prevResult)=> {
                return '정답 '+ value;
            });
            setValue('');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
        } else {
            setResult('땡');
            setValue('');
        }
        inputRef.current.focus();
    }
    
    const inputRef = useRef(null);
    // React html에서 class는 className
    //     label 에서 for  는 htmlFor
    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} type="number" value={value} onChange={onChangeInput} />
                <button type="submit">입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
}
module.exports = GuGuDan;