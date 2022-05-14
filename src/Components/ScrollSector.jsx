import React, {useEffect, useRef, useState} from 'react';
import "../styles/ScrollSector.scss"
import Container from "./UI/Container/Container";
import MySVGs from "../assets/MySVGs";

const ScrollSector = () => {
    const slideTexts = [
        'That\'s sample text',
        'Consectetur adipisicing',
        'Lorem ipsum dolor',
        'Other sample text',
    ]
    const block = useRef();
    const blockToRound = useRef();
    const [active, setActive] = useState(false);
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
        const revolutionsQuantity = 1;
        blockToRound.current.style.transform = `rotate(${revolutionsQuantity*animationPercent*360}deg)`;
        if (animationPercent >= 0.5){
            setActive(true)
        } else {
            setActive(false)
        }
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
                    <div className="ScrollSector__svg" ref={blockToRound}>
                        <MySVGs id={"yinYang"} fill="#ffffff"/>
                    </div>
                    {
                        slideTexts.map((text, index) => {
                            return(
                                <div
                                    key={index}
                                    id={'slide-text-' + (index)}
                                    className={"ScrollSector__slide-text" + (active ? " _active" : "")}
                                >
                                    {text}
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    );
};

export default ScrollSector;