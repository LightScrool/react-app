import React, {useRef} from 'react';
import classes from "./PopUp.module.scss";
import {Transition} from "react-transition-group";

const PopUp = React.forwardRef(({
                                    children,
                                    className,
                                    visible,
                                    setVisible,
                                    animationDuration = 300,
                                    ...props
                                }, ref) => {
    const nodeRef = useRef(null);
    ref = ref ?? nodeRef;

    return (
        <Transition
            nodeRef={ref}
            in={visible}
            timeout={{
                enter: 0,
                exit: animationDuration
            }}
            appear={true}
            mountOnEnter
            unmountOnExit
        >
            {TransitionStateClass => {
                TransitionStateClass = classes[TransitionStateClass]
                return (
                    <div
                        ref={ref}
                        className={classes.PopUp + ` ${TransitionStateClass}`}
                        style={{transition: `background ${animationDuration}ms`}}
                        onClick={() => setVisible(false)}
                    >
                        <div
                            className={classes.PopUp__Content + (className ? ` ${className}` : '') + ` ${TransitionStateClass}`}
                            style={{transition: `transform ${animationDuration}ms`}}
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