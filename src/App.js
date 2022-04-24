import React from 'react';
import Header from "./Components/Header";
import PostsPage from "./Pages/PostsPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SlidersPage from "./Pages/SlidersPage";
import MainPage from "./Pages/MainPage";
import PageNotFound from "./Pages/PageNotFound";
import SinglePostPage from "./Pages/SinglePostPage";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route exact path="/posts" element={<PostsPage/>}/>
                <Route exact path="/posts/:id" element={<SinglePostPage/>}/>
                <Route path="/sliders" element={<SlidersPage/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;