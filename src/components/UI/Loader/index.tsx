import React from 'react';
import classes from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>((
    {
        className,
        ...props
    },
    ref) => {

    return (
        <div
            ref={ref}
            className={classes.Loader + (className ? ` ${className}` : '')}
            {...props}
        />
    );
});

export default Loader;
