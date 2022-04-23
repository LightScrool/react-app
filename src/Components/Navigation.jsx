import React from 'react';
import '../styles/Navigation.css'

const Navigation = () => {
    return (
        <ul className="Navigation">
            <li className="Navigation__item">Posts</li>
            <li className="Navigation__item">Sliders</li>
            <li className="Navigation__item">Scroll</li>
        </ul>
    );
};

export default Navigation;