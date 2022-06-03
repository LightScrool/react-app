import React from 'react';
import {FC} from 'react';
import './styles/App.scss';

const App:FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    This is apple: <i className="fa-brands fa-apple"/>
                </p>
            </header>
        </div>
    );
};

export default App;
