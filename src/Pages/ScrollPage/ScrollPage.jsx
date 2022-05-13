import React, {useEffect} from 'react';
import './ScrollPage.scss';
import AboutScroll from "../../Components/AboutScroll";
import ScrollObject from "../../Components/ScrollObject";

const ScrollPage = () => {
    const onWindowScroll = () => {
        console.log(1);
    }

    useEffect(() => {
        window.addEventListener("scroll", onWindowScroll)

        return () => window.removeEventListener("scroll", onWindowScroll);
    }, [])

    return (
        <div className="ScrollPage">
            <AboutScroll
                text="На этой странице продемонстрированны анимации при прокрутке, пролистайте ниже, чтобы увидеть"
            />
            <ScrollObject/>
            <AboutScroll/>
        </div>
    );
};

export default ScrollPage;