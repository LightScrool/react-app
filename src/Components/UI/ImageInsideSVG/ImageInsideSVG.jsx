import React from 'react';
import image from "../../../assets/images/my-photo.jpg";
import classes from "./ImageInsideSVG.module.css";

const ImageInsideSvg = ({
                            viewBox = "0 0 100 100",
                            imageURL,
                            imageWidth = "100",
                            imageTransform = "",
                            maskSVG
                        }) => {

    const _class = classes.ImageInsideSvg;
    const maskId = `${_class}_mask`;

    return (
        <svg viewBox={viewBox} className={_class}>
            <mask id={maskId}>
                {maskSVG}
            </mask>

            <g mask={`url(#${maskId})`}>
                <image xlinkHref={imageURL} width={imageWidth} transform={imageTransform}/>
            </g>
        </svg>
    );
};

export default ImageInsideSvg;