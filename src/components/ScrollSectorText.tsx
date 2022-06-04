import React, {FC, useRef} from 'react';
import {Transition} from "react-transition-group";
import '../styles/ScrollSectorText.scss';

interface ScrollSectorTextProps {
    text: string,
    id: string,
    isActive: boolean,
    timeout: number
}

const ScrollSectorText: FC<ScrollSectorTextProps> = (
    {
        text,
        id,
        isActive,
        timeout
    }) => {

    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <Transition
            nodeRef={nodeRef}
            in={isActive}
            timeout={{
                enter: 20,
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