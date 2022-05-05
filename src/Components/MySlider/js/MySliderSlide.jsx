import React, {useRef} from 'react';
import '../styles/MySliderSlide.scss'
import {Transition} from "react-transition-group";

const MySliderSlide = ({data, index, activeSlide, ANIMATION_DURATION}) => {
    const nodeRef = useRef(null);

    return (
        <Transition
            nodeRef={nodeRef}
            in={index === activeSlide}
            timeout={{
                enter: 0,
                exit: ANIMATION_DURATION
            }}
            mountOnEnter
            unmountOnExit
        >
            {state => {
                return (
                    <div
                        ref={nodeRef}
                        className={`MySliderSlide ${state}`}
                        style={{transition: `all ${ANIMATION_DURATION}ms`}}
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