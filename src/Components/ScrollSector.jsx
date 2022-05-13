import React, {useEffect, useRef, useState} from 'react';
import "../styles/ScrollSector.scss"
import Container from "./UI/Container/Container";
import MySVGs from "../assets/MySVGs";
import {getElementTopOffset} from "../utils";

const ScrollSector = () => {
    const block = useRef();

    const [animationStage, setAnimationStage] = useState("_start");

    const onWindowScroll = () => {
        const offset = window.scrollY;
        const animationStart = getElementTopOffset(block);
        const animationEnd = animationStart + block.current.getBoundingClientRect().height - window.innerHeight;

        if (animationStart > offset) {
            setAnimationStage("_start");
        } else if (animationEnd < offset) {
            setAnimationStage("_end");
        } else {
            setAnimationStage("_extension");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onWindowScroll)

        return () => {
            window.removeEventListener('scroll', onWindowScroll)
        }
    }, [])

    return (
        <div ref={block} className="ScrollSector">
            <Container>
                <div className={`ScrollSector__inner ${animationStage}`}>
                    <div className="ScrollSector__svg">
                        <MySVGs id={"yinYang"} fill="#ffffff"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ScrollSector;