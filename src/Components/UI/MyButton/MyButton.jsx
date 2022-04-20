import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, className, ...props}) => <button className={`${classes.MyButton} ${className}`} {...props}>{children}</button>;

export default MyButton;