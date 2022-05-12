import React from 'react';
import "./TestPage.scss";
import Container from "../../Components/UI/Container/Container";


const TestPage = () => {
    return (
        <div className="TestPage">
            <Container>
                <div className="TestPage__inner">
                    <h1 className="TestPage__title">There will be tests</h1>
                </div>
            </Container>
        </div>
    );
};

export default TestPage;