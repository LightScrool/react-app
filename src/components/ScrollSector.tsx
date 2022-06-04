import React, {useEffect, useMemo, useRef, useState} from 'react';
import "../styles/ScrollSector.scss"
import Container from "./UI/Container";
import MySVGs from "../assets/MySVGs";
import useScroll from "../hooks/useScroll";
import ScrollSectorText from "./ScrollSectorText";

const ScrollSector = () => {
    const SLIDE_TEXTS: string[] = [
        'That\'s sample text',
        'Consectetur adipisicing',
        'Lorem ipsum dolor',
        'Other sample text',
    ]
    const REVOLUTION_QUANTITY: number = 1.5;
    const TIMEOUT: number = 1500;

    const animationBlock = useRef<HTMLDivElement>(null);
    const [startCoords, setStartCoords] = useState<number>(0);
    const [endCoords, setEndCoords] = useState<number>(0);
    const windowPos: number = useScroll();

    const animationPercent = useMemo<number>(() => {
        let percent = (windowPos - startCoords) / (endCoords - startCoords);
        if (percent < 0) percent = 0;
        if (percent > 1) percent = 1;
        return percent;
    }, [windowPos, startCoords, endCoords]);

    const active = useMemo<boolean>(() => animationPercent >= 0.5, [animationPercent])

    useEffect(() => {
        const calculateAnimationZone = () => {
            const box = animationBlock.current?.getBoundingClientRect();
            setStartCoords((box ? box.top : 0) + window.scrollY);
            setEndCoords((box ? box.bottom : 0) + window.scrollY - window.innerHeight);
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

export default ScrollSector;
