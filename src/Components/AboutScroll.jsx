import React from 'react';
import "../styles/AboutScroll.scss"
import Container from "./UI/Container/Container";

const AboutScroll = ({text}) => {
    return (
        <div className="AboutScroll">
            <Container>
                <div className="AboutScroll__inner">
                    <h1 className="AboutScroll__title">Scroll Animation</h1>
                    <div className="AboutScroll__text">
                        {text ?? ""}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutScroll;