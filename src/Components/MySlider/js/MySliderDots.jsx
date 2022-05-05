import React from 'react';
import '../styles/MySliderDots.css'
import MySliderDot from "./MySliderDot";

const MySliderDots = ({data, activeSlide, setActiveSlide, ANIMATION_DURATION}) => {
    let index = 0;

    return (
        <ul className="MySliderDots">
            {data.map(item => {
                return(
                    <MySliderDot
                        key={index}
                        index={index++}
                        data={item}
                        activeSlide={activeSlide}
                        setActiveSlide={setActiveSlide}
                        ANIMATION_DURATION={ANIMATION_DURATION}
                    />
                )
            })}
        </ul>
    );
};

export default MySliderDots;