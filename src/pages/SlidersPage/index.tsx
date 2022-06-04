import React, {useState} from 'react';
import './style.scss';
import {MySliderData} from "../../store/noReduxData";
import Container from "../../components/UI/Container";
import MySlider, {MySliderDots} from "../../components/MySlider";

const SlidersPage = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0); // Index of active slide
    const ANIMATION_DURATION: number = 600;

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
