import React from 'react';
import './MySlider.css'
import MySliderSlide from "./MySliderSlide";

const MySlider = ({data, activeSlide}) => {
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
                    />
                )
            })}
        </div>
    );
};

export default MySlider;