import React, {useState} from 'react';
import "../styles/SlidersPage.css"
import Container from "../Components/UI/Container/Container";
import MySliderDots from "../Components/MySlider/js/MySliderDots";
import {MySliderData} from '../data';
import MySlider from "../Components/MySlider/js/MySlider";

const SlidersPage = () => {
    const [activeSlide, setActiveSlide] = useState(0); // Index of active slide

    return (
        <div className="SlidersPage">
            <Container>
                <MySlider data={MySliderData} activeSlide={activeSlide}/>
                <MySliderDots data={MySliderData} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
            </Container>
        </div>
    );
};

export default SlidersPage;