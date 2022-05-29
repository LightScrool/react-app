import React, {useRef} from 'react';
import {Transition} from "react-transition-group";
import '../styles/ScrollSectorText.scss';

const ScrollSectorText = ({text, id, isActive, timeout}) => {
    const nodeRef = useRef();

    return (
        <Transition
            nodeRef={nodeRef}
            in={isActive}
            timeout={{
                enter: 10,
                exit: timeout
            }}
            mountOnEnter
            unmountOnExit
        >
            {
                state => (
                    <div
                        ref={nodeRef}
                        id={id}
                        className={`ScrollSectorText ${state}`}
                    >
                        {text}
                    </div>
                )
            }
        </Transition>
    );
};

export default ScrollSectorText;