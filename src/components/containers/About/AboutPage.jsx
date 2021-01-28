import React, { useState, useEffect, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './AboutPage.scss';


function AboutPage() {
    return (
        <>
            <section className='AboutPage'>
                Hello you are in About
            </section>
        </>
    )
}


export default AboutPage = memo(AboutPage);
        