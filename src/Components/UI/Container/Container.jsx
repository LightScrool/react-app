import React from 'react';
import classes from './Container.module.css'

const Container = React.forwardRef(({children, className, ...props}, ref) => {
    return (
        <div
            ref={ref}
            className={classes.Container + (className ? ` ${className}` : '')}
            {...props}
        >
            {children}
        </div>
    );
});

export default Container;