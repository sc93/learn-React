import React, { Component, useCallback } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import {login, logout} from './actions/user';
class App extends Component {
    state = {

    };
    onLogin = () => {
        this.props.login({
            id:'shin',
            password : '비밀번호'
        })
    };
    onLogout = ()=> {
        this.props.logout();
    }
    render() { 
        const { user } = this.props;
        return (
            <>
                <div>
                    {user.isLoggingIn 
                    ? <div>로그인중입니다.</div>
                    : (user.data 
                    ? <div>{user.data.nickname}</div>
                    : "로그인해주세요.")}
                    { !user.isLoggingIn && (user.data 
                    ? <button onClick={this.onLogout}>로그아웃</button> 
                    : <button onClick={this.onLogin}>로그인</button>)}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state)=> ({
    user :state.user,
}); // reselect

const mapDispatchToProps = (dispatch)=> ({
    login : (data)=>dispatch(login(data)),
    logout : ()=> dispatch(logout()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
// const App = () => {
//     const user = useSelector((state)=>state.user.data);
//     const dispatch = useDispatch();

//     const onClick = useCallback(()=> {
//         dispatch(login({
//             id:'shin',
//             password : '비밀번호'
//         }))
//     },[]) 
//     return (
//         <>
//             <div>
//                 {user ? <div>{user.nickname}</div> : "로그인해주세요."}
//                 <button onClick={onClick}>로그인</button>
//             </div>
//         </>
//     )
// }

// export default App;