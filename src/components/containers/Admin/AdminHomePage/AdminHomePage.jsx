import React, { useState, useEffect, useMemo, memo} from 'react';
import { Route, Switch, NavLink, Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AdminToken } from '../../AdminToken/AdminToken';

function AdminHomePage() {

    const name = useSelector(state => state.Reducer.Admin);
    const dispatch = useDispatch()
    const history = useHistory()

    const Logout = () => {
        AdminToken.deleteToken()
        dispatch({type:'ADMIN',payload:''})
        history.push('/')
    }
    return (
        <>
            <section className=''>
                hello {name}
                <button onClick={Logout}>logout</button>
            </section>
        </>
    )
}


export default AdminHomePage = memo(AdminHomePage);