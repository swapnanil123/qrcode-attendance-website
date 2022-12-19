import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AdminView from './AdminView';
import StudentView from './StudentView';


function Welcome() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path='/adminView' element={ <AdminView/> } />
                    <Route path='/studentView' element={ <StudentView/> } />
                </Routes>
            </BrowserRouter>
            
        </>
    )
}

export default Welcome;