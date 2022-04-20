import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({data, title, className, ...props}) => {
    return (
        <select className={`${classes.MySelect} ${className}`} {...props} defaultValue={title}>
            <option value={title} disabled={true}>{title}</option>
            {Object.keys(data).map(key => {
                return(
                    <option key={key} className={classes.MySelect__item} value={key}>{data[key]}</option>
                )
            })}
        </select>
    );
};

export default MySelect;