import React from 'react';
import classes from './MyInput.module.scss';

const MyInput = React.forwardRef(({children, className, ...props}, ref) => {
    return (
        <input
            type='text'
            ref={ref}
            className={classes.MyInput + (className ? ` ${className}` : '')}
            {...props}
        >
            {children}
        </input>
    );
});

export default MyInput;