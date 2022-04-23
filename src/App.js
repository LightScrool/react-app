import React from 'react';
import Header from "./Components/Header";
import PostsPage from "./Pages/PostsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SlidersPage from "./Pages/SlidersPage";
import MainPage from "./Pages/MainPage";
import Footer from "./Components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/sliders" element={<SlidersPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;