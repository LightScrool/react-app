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
    const [blockStart, setBlockStart] = useState<number>(0);
    const [blockEnd, setBlockEnd] = useState<number>(0);
    const animationPercent: number = useScroll(blockStart, blockEnd);

    const active = useMemo<boolean>(() => animationPercent >= 0.5, [animationPercent])

    useEffect(() => {
        const calculateAnimationZone = () => {
            // TODO: This function seems unreliable
            const box = animationBlock.current?.getBoundingClientRect();
            setBlockStart((box ? box.top : 0) + window.scrollY);
            setBlockEnd((box ? box.bottom : 0) + window.scrollY - window.innerHeight);
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
