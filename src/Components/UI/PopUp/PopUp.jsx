import React, {useRef} from 'react';
import classes from "./PopUp.module.scss";
import {Transition} from "react-transition-group";

const PopUp = React.forwardRef(({children, className, visible, setVisible, ...props}, ref) => {
    const nodeRef = useRef(null);
    ref = ref ?? nodeRef;

    return (
        <Transition
            nodeRef={ref}
            in={visible}
            timeout={300}
            mountOnEnter
            unmountOnExit
        >
            {TransitionStateClass => {
                return (
                    <div
                        ref={ref}
                        className={classes.PopUp + ` ${TransitionStateClass}`}
                        onClick={() => setVisible(false)}
                    >
                        <div
                            className={classes.PopUp__Content + (className ? ` ${className}` : '') + ` ${TransitionStateClass}`}
                            onClick={event => event.stopPropagation()}
                            {...props}
                        >
                            <i
                                className={`${classes.PopUp__CloseButton} fas fa-times`}
                                aria-hidden="true"
                                onClick={() => setVisible(false)}
                            />
                            {children}
                        </div>
                    </div>
                )
            }
            }
        </Transition>
    );
});

export default PopUp;