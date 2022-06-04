import React, {FC} from 'react';
import Header from "../components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ROUTES from "../routes";


const App:FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                {ROUTES.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
