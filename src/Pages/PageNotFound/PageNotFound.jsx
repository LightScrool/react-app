import React from 'react';
import "./PageNotFound.scss";

const PageNotFound = () => {
    return (
        <div className="PageNotFound">
            <h1 className="PageNotFound__code">404</h1>
            <h3 className="PageNotFound__text">Страница не найдена!</h3>
        </div>
    );
};

export default PageNotFound;