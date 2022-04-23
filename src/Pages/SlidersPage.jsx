import React, {useState} from 'react';
import "../styles/SlidersPage.css"
import Container from "../Components/UI/Container/Container";
import MySliderSlide from "../Components/MySlider/MySliderSlide";
import MySliderDots from "../Components/MySlider/MySliderDots";
import {MySliderData} from '../data';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import MySlider from "../Components/MySlider/MySlider";

const SlidersPage = () => {
    const [data, setData] = useState(MySliderData);
    const [activeSlide, setActiveSlide] = useState(0); // Index of active slide

    return (
        <div className="SlidersPage">
            <Container>
                <MySlider data={data} activeSlide={activeSlide}/>
                <MySliderDots data={data} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
            </Container>
        </div>
    );
};

export default SlidersPage;