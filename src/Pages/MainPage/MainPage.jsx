import React from 'react';
import './MainPage.scss';
import Container from "../../Components/UI/Container/Container";
import Footer from "../../Components/Footer";
import MyPhoto from "../../Components/MyPhoto";

const MainPage = () => {
    return (
        <>
        <div className="MainPage">
            <Container>
                <h1 className="MainPage__title">
                    Добро пожаловать!
                </h1>
                <div className="MainPage__content">
                    <div className="MainPage__photo">
                        <MyPhoto/>
                    </div>
                    <div className="MainPage__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam animi at beatae culpa dicta doloremque, ducimus eaque fuga impedit ipsam ipsum iste labore laboriosam magni minus molestias natus nobis optio pariatur provident quaerat quasi recusandae rerum sapiente sit tempore voluptate. Accusantium earum hic iste maiores, nisi non officiis quam quo reiciendis repellat suscipit ullam!
                    </div>
                </div>
            </Container>
        </div>
        <Footer/>
        </>
);
};

export default MainPage;