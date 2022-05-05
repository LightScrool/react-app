import React from 'react';
import classes from './Container.module.scss'

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