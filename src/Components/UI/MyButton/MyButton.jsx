import React from 'react';
import classes from './MyButton.module.css'

const MyButton = React.forwardRef(({children, className, ...props}, ref) => {
    return(
        <button
            ref={ref}
            className={classes.MyButton + (className ? ` ${className}` : '')}
            {...props}
        >
            {children}
        </button>
    );
});

export default MyButton;