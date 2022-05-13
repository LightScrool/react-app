import React, {useEffect, useRef } from 'react';
import "../styles/ScrollSector.scss"
import Container from "./UI/Container/Container";
import MySVGs from "../assets/MySVGs";

const ScrollSector = () => {
    const block = useRef();
    const blockToAnimate = useRef();
    let animationPercent, startCoords, endCoords;

    const calculateAnimationZone = () => {
        const box = block.current.getBoundingClientRect();
        startCoords = box.top + window.pageYOffset;
        endCoords = box.bottom + window.pageYOffset - window.innerHeight;
    }

    const calculateAnimationPercent = () => {
        let percent = (window.scrollY - startCoords) / (endCoords - startCoords);
        if (percent < 0) percent = 0;
        if (percent > 1) percent = 1;
        animationPercent = percent;
    }

    const onWindowScroll = () => {
        calculateAnimationPercent();
        blockToAnimate.current.style.transform = `rotate(${animationPercent*360}deg)`; // TODO: тригерить только при изменении animationPercent
    }

    // ditMount
    useEffect(() => {
        calculateAnimationZone();

        window.addEventListener('scroll', onWindowScroll);
        window.addEventListener('resize', calculateAnimationZone);

        return () => {
            window.removeEventListener('scroll', onWindowScroll)
            window.removeEventListener('resize', calculateAnimationZone);
        }
    }, [])

    return (
        <div ref={block} className="ScrollSector">
            <Container>
                <div className="ScrollSector__inner">
                    <div className="ScrollSector__svg" ref={blockToAnimate}>
                        <MySVGs id={"yinYang"} fill="#ffffff"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ScrollSector;