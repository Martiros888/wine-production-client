import React, { useState, useEffect, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './BasketPage.scss';


function BasketPage() {
    return (
        <>
            <section className='BasketPage'>
                Hello you are in Basket 
            </section>
        </>
    )
}


export default BasketPage = memo(BasketPage);
        