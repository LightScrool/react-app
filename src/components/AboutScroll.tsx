import {FC} from 'react';
import "../styles/AboutScroll.scss"
import Container from "./UI/Container";

interface AboutScrollProps {
    text?: string
}

const AboutScroll: FC<AboutScrollProps> = ({text}) => {
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