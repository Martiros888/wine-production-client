import React, { useState, useEffect, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { UserToken } from './components/containers/UserToken/UserToken';
import Navigation from './components/routs/navigation';
import Routs from './components/routs/routner';
import {post,get} from './components/Axios/Axios';

function App() {
    const dispatch = useDispatch();
    const getWines =async () =>{
        const data = await get('/getwines')
        dispatch({type:'WINES',payload:data})
    }
    const AutoLogin =async () => {
        try {
            if (UserToken.isLogin()) {
                const data = await post('/usertokenverify',{token:UserToken.isLogin()})
                dispatch({type:'USER',payload:data.name});
                dispatch({type:'DATA',payload:data});
            }
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getWines()
        AutoLogin()
    }, []);
    return(
        <>
            <Navigation />
            <Routs/>
        </>
    )
}


export default App = memo(App);