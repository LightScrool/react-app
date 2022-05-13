import React, {useEffect, useRef } from 'react';
import "../styles/ScrollSector.scss"
import Container from "./UI/Container/Container";
import MySVGs from "../assets/MySVGs";

const ScrollSector = () => {
    const block = useRef();


    const onWindowScroll = () => {
        console.log(window.scrollY)
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
                <div className="ScrollSector__inner">
                    <div className="ScrollSector__svg">
                        <MySVGs id={"yinYang"} fill="#ffffff"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ScrollSector;