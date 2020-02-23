import React, {useState,useRef, useEffect, memo} from 'react';

// 클래스의 경우 -> constructor -> render() -> ref -> componentDidMount -> 
// setState/props 바뀔 때 -> shouldComponentUpdate -> render -> componentDidUpdate ->
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸
const rspCoords = {
    rock : '0',
    scissor : '-142px',
    paper : '-284px'
}
const rspScores = {
    scissor : 1,
    rock : 0,
    paper : -1
}
const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v){
        return v[1] === imgCoord;
    })[0];
}
//                          result score imgCoords
//   ComponentDidMount      
//   componentDidUpdate
//   componentWillUnmount
const RSP = memo( ()=> {
    const [result,setResult] = useState('');
    const [imgCoord,setImgCoord] = useState('0');
    const [score,setScore] = useState(0);
    const interval = useRef();

    useEffect(()=>{ //componentDidMount componentDidUpdate 역할(1 대 1 대응은 아님)
        interval.current = setInterval(intervalCb,100);
        return ()=>{ // componentWillUnmount역할
            clearInterval(interval.current);
        }
    },[imgCoord]);  // useEffect를 실행하고 싶은 상태

    // useEffect 여러개 사용 가능
    // useEffect(()=>{ //componentDidMount componentDidUpdate 역할(1 대 1 대응은 아님)
    //     interval.current = setInterval(intervalCb,100);
    //     return ()=>{ // componentWillUnmount역할
    //         clearInterval(interval.current);
    //     }
    // },[score]);  // useEffect를 실행하고 싶은 상태

    // useEffect(()=>{ //componentDidMount componentDidUpdate 역할(1 대 1 대응은 아님)
    //     interval.current = setInterval(intervalCb,100);
    //     return ()=>{ // componentWillUnmount역할
    //         clearInterval(interval.current);
    //     }
    // },[result]);  // useEffect를 실행하고 싶은 상태

    // useEffect(()=>{ //componentDidMount componentDidUpdate 역할(1 대 1 대응은 아님)
    //     interval.current = setInterval(intervalCb,100);
    //     return ()=>{ // componentWillUnmount역할
    //         clearInterval(interval.current);
    //     }
    // },[]);  // 아무것도 없으면 componentDidMount 역할
    
    const intervalCb = ()=>{
        if(imgCoord === rspCoords.rock) {
            setImgCoord(rspCoords.scissor);
        } else if(imgCoord === rspCoords.scissor) {
            setImgCoord(rspCoords.paper);
        } else if(imgCoord === rspCoords.paper) {
            setImgCoord(rspCoords.rock);
        } 
    }

    const onClickBtn = (v) => () => {
        clearInterval(interval.current);
        const myScore = rspScores[v];
        const cpuScore = rspScores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if(diff === 0) {
            setResult('비겼습니다.');
        } else if([-1, 2].includes(diff)) {
            setResult('이겼습니다.');
            setScore(prevScore=>prevScore+1);
        } else {
            setResult('졌습니다.');
            setScore(prevScore=>prevScore-1);
        }
        setTimeout(()=>{interval.current = setInterval(intervalCb,100);},1000)
        
    }
    return (
        <>
            <div id="computer" style={{background : `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`} }>
            </div>
            <button id="rock" className="btn" onClick={ onClickBtn('rock')}>바위</button>
            <button id="scissor" className="btn" onClick={ onClickBtn('scissor')}>가위</button>
            <button id="paper" className="btn" onClick={ onClickBtn('paper')}>보</button>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
});
// class RSP extends Component {
//     state = {
//         result : '',
//         imgCoord : '0',
//         score : 0,
//     };

//     interval;

//     // 이 컴포넌트가 처음 렌더링 된 후 -> 비동기 요청
//     componentDidMount(){
//         this.interval = setInterval(this.intervalCb,100)
//     };
    
//     // 리렌더링 되었을 때
//     componentDidUpdate(){
//     };

//     // 컴포넌트가 제거되기 직전 -> 비동기요청 정리
//     componentWillUnmount(){
//         clearInterval(this.interval);
//     };

//     onClickBtn = (v) => () => {
//         clearInterval(this.interval);
//         const { imgCoord } = this.state;
//         const myScore = rspScores[v];
//         const cpuScore = rspScores[computerChoice(imgCoord)];
//         const diff = myScore - cpuScore;
//         if(diff === 0) {
//             this.setState({
//                 result : '비겼습니다.'
//             })
//         } else if([-1, 2].includes(diff)) {
//             this.setState((prevState)=>{
//                 return {
//                     result : '이겼습니다.',
//                     score : prevState.score+1
//                 }
//             })
//         } else {
//             this.setState((prevState)=>{
//                 return {
//                     result : '졌습니다.',
//                     score : prevState.score-1
//                 }
//             })
//         }
//         setTimeout(()=>{this.interval = setInterval(this.intervalCb,100);},1000)
        
//     }
    
//     intervalCb = ()=>{
//         const { imgCoord } = this.state;
//         if(imgCoord === rspCoords.rock) {
//             this.setState({
//                 imgCoord : rspCoords.scissor
//             });
//         } else if(imgCoord === rspCoords.scissor) {
//             this.setState({
//                 imgCoord : rspCoords.paper
//             });
//         } else if(imgCoord === rspCoords.paper) {
//             this.setState({
//                 imgCoord : rspCoords.rock
//             });
//         } 
//     }

//     render() {
//         const {result , score, imgCoord} = this.state;
//         return (
//             <>
//                 <div id="computer" style={{background : `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`} }>
                     
//                 </div>
//                 <button id="rock" className="btn" onClick={ this.onClickBtn('rock')}>바위</button>
//                 <button id="scissor" className="btn" onClick={ this.onClickBtn('scissor')}>가위</button>
//                 <button id="paper" className="btn" onClick={ this.onClickBtn('paper')}>보</button>
//                 <div>{result}</div>
//                 <div>현재 {score}점</div>
//             </>
//         );
//     }
// }
export default RSP;