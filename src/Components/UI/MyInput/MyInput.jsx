import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef(({children, className, ...props}, ref) => {
    return (
        <input
            type='text'
            ref={ref}
            className={classes.MyInput + (` ${className}` ?? '')}
            {...props}
        >
            {children}
        </input>
    );
});

export default MyInput;