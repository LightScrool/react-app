import React from 'react';
import Header from "./Components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import routes from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                {routes.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            element={route.element}
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;