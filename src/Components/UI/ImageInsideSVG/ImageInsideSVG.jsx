import React from 'react';
import classes from "./ImageInsideSVG.module.css";

const ImageInsideSvg = React.forwardRef(({
                                             viewBox = "0 0 100 100",
                                             imageURL,
                                             imageWidth = "100",
                                             imageTransform = "",
                                             maskSVG,
                                             className
                                         }, ref) => {

    const _class = classes.ImageInsideSvg;
    const maskId = `${_class}_mask`;

    return (
        <svg
            ref={ref}
            viewBox={viewBox}
            className={_class + (` ${className}` ?? '')}
        >
            <mask id={maskId}>{maskSVG}</mask>

            <g mask={`url(#${maskId})`}>
                <image xlinkHref={imageURL} width={imageWidth} transform={imageTransform}/>
            </g>
        </svg>
    );
});

export default ImageInsideSvg;