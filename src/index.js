import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './head';
import AdminMainContainer from './adminContainer';
import Foot from './foot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <AdminMainContainer />
    <Foot />
  </React.StrictMode>
);
