import React, { Component, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login} from './actions/user';
const App = () => {
    const user = useSelector((state)=>state.user.data);
    const dispatch = useDispatch();

    const onClick = useCallback(()=> {
        dispatch(login({
            id:'shin',
            password : '비밀번호'
        }))
    },[]) 
    return (
        <>
            <div>
                {user ? <div>{user.nickname}</div> : "로그인해주세요."}
                <button onClick={onClick}>로그인</button>
            </div>
        </>
    )
}

export default App;