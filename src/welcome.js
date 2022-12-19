import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminMainContainer from './adminMainContainer';
import Home from './Home';

function Welcome() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path='/adminMainContainer' element={ <AdminMainContainer/> } />
                </Routes>
            </BrowserRouter>
            
        </>
    )
}

export default Welcome;