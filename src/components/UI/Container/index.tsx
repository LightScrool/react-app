import React, {ReactNode} from 'react';
import classes from './Container.module.scss';

interface ContainerProps {
    children?: ReactNode,
    className?: string
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>((
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
