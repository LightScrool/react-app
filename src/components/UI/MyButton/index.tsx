import React, {ReactNode} from 'react';
import classes from './MyButton.module.scss'

interface MyButtonProps {
    children?: ReactNode,
    className?: string
}

const MyButton = React.forwardRef<HTMLButtonElement, MyButtonProps>((
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