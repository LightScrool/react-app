import React, {useState} from 'react';
import "./SlidersPage.scss"
import Container from "../../Components/UI/Container/Container";
import MySliderDots from "../../Components/MySlider/js/MySliderDots";
import {MySliderData} from '../../store/data';
import MySlider from "../../Components/MySlider/js/MySlider";

const SlidersPage = () => {
    const [activeSlide, setActiveSlide] = useState(0); // Index of active slide
    const ANIMATION_DURATION = 600;

    return (
        <div className="SlidersPage">
            <Container>
                <MySlider
                    data={MySliderData}
                    activeSlide={activeSlide}
                    ANIMATION_DURATION={ANIMATION_DURATION}
                />
                <MySliderDots
                    data={MySliderData}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                    ANIMATION_DURATION={ANIMATION_DURATION}
                />
            </Container>
        </div>
    );
};

export default SlidersPage;