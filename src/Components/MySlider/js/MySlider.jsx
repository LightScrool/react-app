import React from 'react';
import '../styles/MySlider.css'
import MySliderSlide from "./MySliderSlide";

const MySlider = ({data, activeSlide, ANIMATION_DURATION}) => {
    // TODO: Rewrite on react-transition-group
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