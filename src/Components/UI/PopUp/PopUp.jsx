import React from 'react';
import classes from "./PopUp.module.css";

const PopUp = React.forwardRef(({children, className, visible, setVisible, ...props}, ref) => {
    return (
        //TODO: удаление при исчезновении
        <div
            ref={ref}
            className={visible ? `${classes.PopUp}` : `${classes._inactive} ${classes.PopUp}`}
            onClick={() => setVisible(false)}
        >
            <div
                className={visible ? `${classes.PopUp__Content} ${className}` : ` ${classes._inactive} ${classes.PopUp__Content} ${className}`}
                {...props}
                onClick={event => event.stopPropagation()}
            >
                <i
                    className={`${classes.PopUp__CloseButton} fas fa-times`}
                    aria-hidden="true"
                    onClick={() => setVisible(false)}
                />
                {children}
            </div>
        </div>
    );
});

export default PopUp;