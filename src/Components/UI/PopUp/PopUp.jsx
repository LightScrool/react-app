import React, {useRef} from 'react';
import classes from "./PopUp.module.scss";
import {Transition} from "react-transition-group";

const PopUp = React.forwardRef(({
                                    children,
                                    className,
                                    visible,
                                    setVisible,
                                    ANIMATION_DURATION = 300,
                                    ...props
                                }, ref) => {

    const nodeRef = useRef(null);
    ref = ref ?? nodeRef;

    const animationStyle = {transition: `all ${ANIMATION_DURATION}ms`};

    return (
        <Transition
            nodeRef={ref}
            in={visible}
            timeout={{
                enter: 0,
                exit: ANIMATION_DURATION
            }}
            mountOnEnter
            unmountOnExit
        >
            {TransitionStateClass => {
                TransitionStateClass = classes[TransitionStateClass]
                return (
                    <div
                        ref={ref}
                        className={classes.PopUp + ` ${TransitionStateClass}`}
                        style={animationStyle}
                        onClick={() => setVisible(false)}
                    >
                        <div
                            className={classes.PopUp__Content + (className ? ` ${className}` : '') + ` ${TransitionStateClass}`}
                            style={animationStyle}
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
            }}
        </Transition>
    );
});

export default PopUp;