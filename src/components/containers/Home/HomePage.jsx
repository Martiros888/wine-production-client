import React, { useState, useEffect, useMemo, memo, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get, post } from '../../Axios/Axios';
import './HomePage.scss';
import WineCard from '../WineCard/WineCard';
import { UserToken } from '../UserToken/UserToken';


function HomePage() {
    const getWines =async () =>{
        const data = await get('/getwines')
        setwines(data)
    }
    const [wines, setwines] = useState([]);
    const dispatch = useDispatch();
    const AutoLogin =async () => {
        try {
            if (UserToken.isLogin()) {
                const data = await post('/usertokenverify',{token:UserToken.isLogin()})
                console.log(data)
                dispatch({type:'USER',payload:data.name});
                dispatch({type:'DATA',payload:data});
            }
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        console.log('ok')
        getWines()
        AutoLogin()
    }, []);
    return (
        <>
            <section className='HomePage'>
               Hello you are in Home 
               <section style={{marginTop:'3vw'}} className='products'>
                    {wines.map((elem,i)=> {
                        return (
                            <Fragment key={i}>
                                <WineCard elem={elem}/>
                            </Fragment>
                        )
                    })}
                </section>
            </section>
        </>
    )
}


export default HomePage = memo(HomePage);
        