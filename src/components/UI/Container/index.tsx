import React from 'react';
import classes from './Container.module.scss';
import {UIProps} from "../../../types";

const Container = React.forwardRef<HTMLDivElement, UIProps>((
    {
        children,
        className,
        ...props
    },
    ref) => {

    return (
        <div
            ref={ref}
            className={classes.Container + (className ? ` ${className}` : '')}
            {...props}
        >
            {children ?? <></>}
        </div>
    );
});

export default Container;
