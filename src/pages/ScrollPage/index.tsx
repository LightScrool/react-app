import {FC} from 'react';
import './style.scss';
import AboutScroll from "../../components/AboutScroll";
import ScrollSector from "../../components/ScrollSector";

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