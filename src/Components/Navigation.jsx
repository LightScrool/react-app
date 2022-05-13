import React from 'react';
import '../styles/Navigation.scss'
import {Link} from "react-router-dom";
import {ROUTES_IN_NAVIGATION} from "../routes";

const Navigation = () => {
    return (
        <div className="Navigation">
            {
                ROUTES_IN_NAVIGATION.map((item) => {
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="Navigation__item"
                        >
                            {item.name}
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Navigation;