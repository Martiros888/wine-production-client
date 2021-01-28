import React from 'react';
import {  NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './navigation.scss'
function Navigation() {

    const dispatch = useDispatch()

    const redux = useSelector(state => state.Reducer)

    return (
            <>
                <nav className='navigation'>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='basket'>Basket</NavLink>
                        </li>
                    </ul>
                </nav>
            </>
    )
}    
export default  Navigation