import React, { useState, useEffect, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.scss';


function HomePage() {

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    const [state, setState] = useState('');
    
    const redux = useSelector(state => state.Reducer);
 
    return (
        <>
            <section className='HomePage'>
               Hello you are in Home 
            </section>
        </>
    )
}


export default HomePage = memo(HomePage);
        