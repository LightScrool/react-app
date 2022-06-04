import React, {ReactNode} from 'react';
import classes from './MyInput.module.scss';

interface MyInputProps {
    children?: ReactNode,
    className?: string
}

const MyInput = React.forwardRef<HTMLInputElement, MyInputProps>((
    {
        children,
        className,
        ...props
    }, ref) => {

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