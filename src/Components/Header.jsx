import React from 'react';
import '../styles/Header.scss';
import Navigation from "./Navigation";
import Container from "./UI/Container/Container";
import Logo from "./Logo";

const Header = () => {
    return (
        <header className="Header">
            <Container>
                <div className="Header__inner">
                    <Logo/>
                    <Navigation/>
                </div>
            </Container>
        </header>
    );
};

export default Header;