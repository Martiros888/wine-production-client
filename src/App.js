import React, { useState, useEffect, useMemo, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Navigation from './components/routs/navigation';
import Routs from './components/routs/routner';

function App() {
    return(
        <>
            <Navigation />
            <Routs/>
        </>
    )
}


export default App = memo(App);