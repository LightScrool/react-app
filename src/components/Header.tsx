import React, {FC} from 'react';
import '../styles/Header.scss';
import Navigation from "./Navigation";
import Container from "./UI/Container";
import Logo from "./Logo";

const Header: FC = () => {
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
