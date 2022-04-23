import React from 'react';
import '../styles/MySliderDots.css'
import MySliderDot from "./MySliderDot";

const MySliderDots = ({data, activeSlide, setActiveSlide}) => {
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
                    />
                )
            })}
        </ul>
    );
};

export default MySliderDots;