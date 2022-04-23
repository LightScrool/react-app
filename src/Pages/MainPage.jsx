import React from 'react';
import '../styles/MainPage.css';
import image from '../assets/images/my-photo.jpg';
import Container from "../Components/UI/Container/Container";

const MainPage = () => {
    return (
        <div className="MainPage">
            <Container>
                <h1 className="MainPage__title">
                    Добро пожаловать!
                </h1>
                <div className="MainPage__content">
                    <div className="MainPage__photo">
                        <svg viewBox="0 0 100 100" className="svg">
                            <mask id="mask">
                                <g fill="white">
                                    <path d="M21.6,-37C28.6,-33.4,35.2,-28.8,38.4,-22.5C41.5,-16.1,41.2,-8.1,41,-0.1C40.9,7.9,41,15.8,38.1,22.6C35.2,29.4,29.4,35.2,22.6,37.6C15.7,40,7.9,39,0.6,38C-6.7,37,-13.4,35.9,-20.1,33.4C-26.8,30.9,-33.5,27.1,-38.4,21.3C-43.3,15.5,-46.4,7.7,-46.7,-0.2C-47,-8.1,-44.4,-16.1,-40.2,-23.1C-36,-30,-30,-35.9,-23.1,-39.5C-16.1,-43.1,-8,-44.4,-0.4,-43.8C7.3,-43.2,14.6,-40.6,21.6,-37Z" width="100" height="100" transform="translate(53 53) scale(1.13)"/>
                                </g>
                            </mask>

                            <g mask="url(#mask)">
                                <image xlinkHref={image} width="100" transform="translate(0 3)"/>
                            </g>
                        </svg>
                    </div>
                    <div className="MainPage__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam animi at beatae culpa dicta doloremque, ducimus eaque fuga impedit ipsam ipsum iste labore laboriosam magni minus molestias natus nobis optio pariatur provident quaerat quasi recusandae rerum sapiente sit tempore voluptate. Accusantium earum hic iste maiores, nisi non officiis quam quo reiciendis repellat suscipit ullam!
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MainPage;