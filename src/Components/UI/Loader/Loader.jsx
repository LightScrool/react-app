import React from 'react';
import classes from './Loader.module.scss';

const Loader = React.forwardRef(({className, ...props}, ref) => {
    return (
        <div
            ref={ref}
            className={classes.Loader + (className ? ` ${className}` : '')}
            {...props}
        />
    );
});

export default Loader;