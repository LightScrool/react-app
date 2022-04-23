import React from 'react';
import Header from "./Components/Header";
import PostsPage from "./Pages/PostsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<PostsPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;