import React from 'react';
import classes from './MyButton.module.scss'
import {UIProps} from "../../../types";

const MyButton = React.forwardRef<HTMLButtonElement, UIProps>((
    {
        children,
        className,
        ...props
    },
    ref) => {

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