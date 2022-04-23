import React from 'react';
import '../styles/MySliderSlide.css'

const MySliderSlide = ({data, index, activeSlide}) => {
    return(
        <div className={index === activeSlide? "MySliderSlide _active" : "MySliderSlide"}>
            <h2 className="MySliderSlide__suptitle">{data.suptitle}</h2>
            <h1 className="MySliderSlide__title">{data.title}</h1>
            <button className="MySliderSlide__button">{data.buttonText}</button>
        </div>
    );
};

export default MySliderSlide;