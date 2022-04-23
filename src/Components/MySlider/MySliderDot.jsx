import React from 'react';
import './MySliderDot.css';

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