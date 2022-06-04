import React, {useRef} from 'react';
import classes from "./style.module.scss";
import {Transition} from "react-transition-group";
import {UIProps} from "../../../types";

interface PopUpProps extends UIProps{
    visible: boolean,
    setVisible: (visible: boolean) => void,
    ANIMATION_DURATION?: number,
}

const PopUp = React.forwardRef<HTMLDivElement, PopUpProps>((
    {
        children,
        className,
        visible,
        setVisible,
        ANIMATION_DURATION = 300,
        ...props
    },
    ref) => {

    const nodeRef = useRef<HTMLDivElement>(null);
    ref = ref ?? nodeRef;

    const animationStyle: { [key: string]: string } = {transition: `all ${ANIMATION_DURATION}ms`};

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
                const transitionClassName: string = classes[TransitionStateClass]
                return (
                    <div
                        ref={ref}
                        className={classes.PopUp + ` ${transitionClassName}`}
                        style={animationStyle}
                        onClick={() => setVisible(false)}
                    >
                        <div
                            className={classes.PopUp__Content + (className ? ` ${className}` : '') + ` ${transitionClassName}`}
                            style={animationStyle}
                            onClick={event => event.stopPropagation()}
                            {...props}
                        >
                            <i
                                className={`${classes.PopUp__CloseButton} fas fa-times`}
                                aria-hidden="true"
                                onClick={() => setVisible(false)}
                            />
                            {children ?? <></>}
                        </div>
                    </div>
                )
            }}
        </Transition>
    );
});

export default PopUp;