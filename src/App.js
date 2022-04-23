import React from 'react';
import Header from "./Components/Header";
import PostsPage from "./Pages/PostsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SlidersPage from "./Pages/SlidersPage";

function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/posts" element={<PostsPage/>}/>
                    <Route path="/sliders" element={<SlidersPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;