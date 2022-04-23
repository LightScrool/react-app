import React from 'react';
import '../styles/MySliderDot.css';

const MySliderDot = ({data, index, activeSlide, setActiveSlide}) => {
    return (
        <li
            onClick={() => setActiveSlide(index)}
            className={index === activeSlide ? 'MySliderDot _active' : 'MySliderDot'}
        >
            {`0${index + 1}`}<span> {data.name}</span>
        </li>
    );
};

export default MySliderDot;