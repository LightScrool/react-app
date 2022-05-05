import React from 'react';
import '../styles/MySlider.scss'
import MySliderSlide from "./MySliderSlide";

const MySlider = ({data, activeSlide, ANIMATION_DURATION}) => {
    let index = 0;
    return (
        <div className="MySlider">
            {data.map(item => {
                return(
                    <MySliderSlide
                        key={index}
                        index={index++}
                        data={item}
                        activeSlide={activeSlide}
                        ANIMATION_DURATION={ANIMATION_DURATION}
                    />
                )
            })}
        </div>
    );
};

export default MySlider;