import React, {useEffect, useMemo, useRef, useState} from 'react';
import "../styles/ScrollSector.scss"
import Container from "./UI/Container/Container";
import MySVGs from "../assets/MySVGs";
import useScroll from "../hooks/useScroll";
import {Transition} from "react-transition-group"; // TODO: replace react-transition-group

const ScrollSector = () => {
    const SLIDE_TEXTS = [
        'That\'s sample text',
        'Consectetur adipisicing',
        'Lorem ipsum dolor',
        'Other sample text',
    ]
    const REVOLUTION_QUANTITY = 1.5;
    const TIMEOUT = 1500;

    const animationBlock = useRef();
    const [startCoords, setStartCoords] = useState(0);
    const [endCoords, setEndCoords] = useState(0);
    const windowPos = useScroll();

    const animationPercent = useMemo(() => {
        let percent = (windowPos - startCoords) / (endCoords - startCoords);
        if (percent < 0) percent = 0;
        if (percent > 1) percent = 1;
        return percent;
    }, [windowPos, startCoords, endCoords]);

    const active = useMemo(() => animationPercent >= 0.5, [animationPercent])

    useEffect(() => {
        const calculateAnimationZone = () => {
            const box = animationBlock.current.getBoundingClientRect();
            setStartCoords(box.top + window.pageYOffset);
            setEndCoords(box.bottom + window.pageYOffset - window.innerHeight);
        }

        calculateAnimationZone();

        window.addEventListener('resize', calculateAnimationZone);

        return () => {
            window.removeEventListener('resize', calculateAnimationZone);
        }
    }, [])

    return (
        <div ref={animationBlock} className="ScrollSector">
            <Container>
                <div className="ScrollSector__inner">
                    <div
                        className="ScrollSector__svg"
                        style={{transform: `rotate(${REVOLUTION_QUANTITY * animationPercent * 360}deg)`}}
                    >
                        <MySVGs id={"yinYang"} fill="#ffffff"/>
                    </div>
                    {
                        SLIDE_TEXTS.map((text, index) => {
                            return (
                                <ScrollSectorText
                                    key={'slide-text-' + (index)}
                                    id={'slide-text-' + (index)}
                                    text={text}
                                    index={'slide-text-' + (index)}
                                    isActive={active}
                                    timeout={TIMEOUT}
                                />
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    );
};

function ScrollSectorText({text, id, isActive, timeout}) {
    const nodeRef = useRef();

    return (
        <Transition
            nodeRef={nodeRef}
            in={isActive}
            timeout={{
                enter: 0,
                exit: timeout
            }}
            mountOnEnter
            unmountOnExit
        >
            {
                state => (
                    <div
                        ref={nodeRef}
                        id={id}
                        className={`ScrollSector__slide-text ${state}`}
                    >
                        {text}
                    </div>
                )
            }
        </Transition>
    );
}

export default ScrollSector;
