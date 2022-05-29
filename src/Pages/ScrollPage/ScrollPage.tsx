import {FC} from 'react';
import './ScrollPage.scss';
import AboutScroll from "../../Components/AboutScroll.tsx";
import ScrollSector from "../../Components/ScrollSector";

const ScrollPage: FC = () => {
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