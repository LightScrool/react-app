import {FC, useState} from 'react';
import "./SlidersPage.scss"
import Container from "../../Components/UI/Container/Container";
import MySliderDots from "../../Components/MySlider/js/MySliderDots.tsx";
import {MySliderData} from '../../store/noReduxData.ts';
import MySlider from "../../Components/MySlider/js/MySlider.tsx";

const SlidersPage: FC = () => {
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