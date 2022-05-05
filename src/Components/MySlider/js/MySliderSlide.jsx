import React, {useRef} from 'react';
import '../styles/MySliderSlide.scss'
import {Transition} from "react-transition-group";

const MySliderSlide = ({data, index, activeSlide}) => {
    const nodeRef = useRef(null);
    const animationDuration = 500;

    return (
        <Transition
            nodeRef={nodeRef}
            in={index === activeSlide}
            timeout={{
                enter: 0,
                exit: animationDuration
            }}
            mountOnEnter
            unmountOnExit
        >
            {state => {
                return (
                    <div
                        ref={nodeRef}
                        className={`MySliderSlide ${state}`}
                        style={{transition: `all ${animationDuration}ms`}}
                    >
                        <h2 className="MySliderSlide__subtitle">{data.suptitle}</h2>
                        <h1 className="MySliderSlide__title">{data.title}</h1>
                        <button className="MySliderSlide__button">{data.buttonText}</button>
                    </div>
                )
            }}
        </Transition>
    );
};

export default MySliderSlide;