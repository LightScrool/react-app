import React from 'react';
import "../styles/ScrollObject.scss"
import Container from "./UI/Container/Container";

const ScrollObject = () => {
    return (
        <div className="ScrollObject">
            <Container>
                <div className="ScrollObject__inner">
                    <h1 className="ScrollObject__sample _onScreen">Sample</h1>
                </div>
            </Container>
        </div>
    );
};

export default ScrollObject;