import React from 'react';
import '../styles/Navigation.scss'
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="Navigation">
            <Link to="/posts" className="Navigation__item">Posts</Link>
            <Link to="/sliders" className="Navigation__item">Sliders</Link>
            <Link to="/scroll" className="Navigation__item">Scroll</Link>
        </div>
    );
};

export default Navigation;