import React from 'react';
import "../styles/ScrollObject.scss"
import Container from "./UI/Container/Container";
import MySVGs from "../assets/MySVGs";

const ScrollObject = () => {
    return (
        <div className="ScrollObject">
            <Container>
                <div className="ScrollObject__inner">
                    <div className="ScrollObject__svg">
                        <MySVGs id={"yinYang"} fill="#ffffff"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ScrollObject;