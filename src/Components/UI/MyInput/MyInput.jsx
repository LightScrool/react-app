import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({children, className, ...props}) => {
    return (
        <input type='text' className={`${classes.MyInput} ${className}`} {...props}>{children}</input>
    );
};

export default MyInput;