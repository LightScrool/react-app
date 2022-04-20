import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
    console.log(classes);
    return (
        <div className={classes.Loader}/>
    );
};

export default Loader;