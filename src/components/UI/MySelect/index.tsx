import React from 'react';
import classes from './MySelect.module.scss';

interface MySelectProps {
    data: { [key: string]: string },
    title: string,
    value?: string
    className?: string
}

const MySelect = React.forwardRef<HTMLSelectElement, MySelectProps>((
    {
        data,
        title,
        value,
        className,
        ...props
    }, ref) => {

    return (
        <select
            ref={ref}
            className={classes.MySelect + (className ? ` ${className}` : '')}
            value={value ?? title}
            {...props}
        >
            <option value={""} disabled>{title}</option>
            {Object.keys(data).map(key => {
                return (
                    <option key={key} className={classes.MySelect__item} value={key}>{data[key]}</option>
                )
            })}
        </select>
    );
});

export default MySelect;