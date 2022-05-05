import React from 'react';
import classes from './MySelect.module.css';

const MySelect = React.forwardRef(({data, title, className, ...props}, ref) => {
    return (
        <select
            ref={ref}
            className={classes.MySelect + (className ? ` ${className}` : '')}
            defaultValue={title}
            {...props}
        >
            <option value={title} disabled={true}>{title}</option>
            {Object.keys(data).map(key => {
                return(
                    <option key={key} className={classes.MySelect__item} value={key}>{data[key]}</option>
                )
            })}
        </select>
    );
});

export default MySelect;