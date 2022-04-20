import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Components/App';
import Header from "./Components/Header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <App/>
    </React.StrictMode>
);
