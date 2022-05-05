import React from 'react';
import '../styles/MySliderDot.scss';

const MySliderDot = ({data, index, activeSlide, setActiveSlide, ANIMATION_DURATION}) => {
    const animationStyle = {transition: `all ${ANIMATION_DURATION}ms`};

    return (
        <li
            onClick={() => setActiveSlide(index)}
            className={index === activeSlide ? 'MySliderDot _active' : 'MySliderDot'}
            style={animationStyle}
        >
            <div
                className="MySliderDot__line"
                style={animationStyle}
            />
            {`0${index + 1}`}<span className="MySliderDot__name"> {data.name}</span>
        </li>
    );
};

export default MySliderDot;