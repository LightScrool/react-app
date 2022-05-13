import React from 'react';
import './ScrollPage.scss';
import AboutScroll from "../../Components/AboutScroll";
import ScrollSector from "../../Components/ScrollSector";

const ScrollPage = () => {
    return (
        <div className="ScrollPage">
            <AboutScroll
                text="На этой странице продемонстрированны анимации при прокрутке, пролистайте ниже, чтобы увидеть"
            />
            <ScrollSector/>
            <AboutScroll/>
        </div>
    );
};

export default ScrollPage;