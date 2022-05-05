import React from 'react';
import classes from './Loader.module.css';

const Loader = React.forwardRef(({className, ...props}, ref) => {
    return (
        <div
            ref={ref}
            className={classes.Loader + (` ${className}` ?? '')}
            {...props}
        />
    );
});

export default Loader;