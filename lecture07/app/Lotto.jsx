import React, { Component, useState, useRef, useEffect, memo, useMemo, useCallback } from 'react';
import Ball from './Ball.jsx'
function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0])
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}

const Lotto = memo(() => {
    // Hooks는 항상 최상위에 빼서 실행순서가 같겠끔(리렌더링이 되도 순서는 그대로여야함)
    const lottoMembers = useMemo(() => getWinNumbers(), []); // 함수의 결과값을 기억함 두번째 인자에 들어가는값이 바뀔 때 다시 실행
    const [winNumbers, setWinNumbers] = useState(lottoMembers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState();
    // 아래와 같이 하면 안됨
    // if(조건) {
    //     const [bonus, setBonus] = useState();
    // }
    const [redo, setRedo] = useState(false);

    const timeouts = useRef([]);
    const mounted = useRef(false);
    const runTimeout = () => {  // 함수자체를 기억 ;; 렌더링 될때 Lotto 함수 자체가 다시 실행되는데 이때 함수를 다시 만들지 않음
        console.log('runTimeout');
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevWinBalls) => {
                    return [...prevWinBalls, winNumbers[i]]
                });
            }, (i + 1) * 1000);
        }
        timeouts.current[winNumbers.length - 1] = setTimeout(() => {
            setBonus(winNumbers[winNumbers.length - 1]);
            setRedo(true);
        }, winNumbers.length * 1000);
    };

    useEffect(() => {
        console.log('useEffect update')
        // Hooks 메소드안에서 다른 메소드를 사용하면안됨
        //useState()
        runTimeout();
        return () => {
            timeouts.current.forEach((v) => {
                clearInterval(v);
            })
        }

    }, [timeouts.current]);

    const onClickRedo = useCallback(() => { // 자식 컴포넌트에 함수를 props로 전달할때 필수로 useCallback 사용 함수를 새로 만들때마다 자식은 props가 바뀐걸로 앎
        console.log('onClickRedo');
        console.log(winNumbers)
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus();
        setRedo(true);
        timeouts.current = [];
    }, [winNumbers]);

    return (
        <>
            <div>당첨숫자</div>
            <div id="result">
                {winBalls.map(v => <Ball key={v} number={v} />)}
            </div>
            <div>보너스</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
});
// class Lotto extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             winNumbers: getWinNumbers(),
//             winBalls: [],
//             bonus: null,
//             redo: false,
//         };
//     }

//     timeouts = [];

//     runTimeout = () => {
//         console.log('runTimeout');
//         const { winNumbers } = this.state;
//         for (let i = 0; i < winNumbers.length-1; i++) {
//             this.timeouts[i] = setTimeout(() => {
//                 this.setState((prevState) => {
//                     return {
//                         winBalls: [...prevState.winBalls, winNumbers[i]]
//                     }
//                 })
//             }, (i + 1) * 1000);
//         }
//         this.timeouts[winNumbers.length - 1] = setTimeout(() => {
//             this.setState({
//                 bonus: winNumbers[winNumbers.length - 1],
//                 redo: true
//             })
//         }, winNumbers.length * 1000);
//     }
//     componentDidMount() {
//         console.log('componentDidMount');
//         this.runTimeout();
//     }
//     componentWillUnmount(){
//         this.timeouts.forEach((v)=>{
//             clearInterval(v);
//         })
//     }
//     componentDidUpdate(prevProps, prevState) {
//         console.log('componentDidUpdate');
//         const {winBalls} = this.state;
//         if(winBalls.length === 0) {
//             this.runTimeout();
//         }
//     }
//     onClickRedo = () => {
//         console.log('onClickRedo');
//         this.setState({
//             winNumbers: getWinNumbers(),
//             winBalls: [],
//             bonus: null,
//             redo: false,
//         })
//     }
//     render() {
//         const { winBalls, bonus, redo } = this.state;
//         return (
//             <>
//                 <div>당첨숫자</div>
//                 <div id="result">
//                     {winBalls.map(v => <Ball key={v} number={v} />)}
//                 </div>
//                 <div>보너스</div>
//                 {bonus && <Ball number={bonus} />}
//                 {redo && <button onClick= {this.onClickRedo}>한 번 더!</button>}
//             </>
//         );
//     }
// }

export default Lotto;