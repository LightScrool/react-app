import React, {ReactNode} from 'react';
import classes from "./ImageInsideSVG.module.scss";

interface ImageInsideSvgProps {
    viewBox?: string,
    imageURL: string,
    imageWidth?: string,
    imageTransform?: string,
    maskSVG: ReactNode, // TODO: It should be only svg g
    className?: string
}

const ImageInsideSvg = React.forwardRef<SVGSVGElement, ImageInsideSvgProps>((
    {
        viewBox = "0 0 100 100",
        imageURL,
        imageWidth = "100",
        imageTransform = "",
        maskSVG,
        className
    },
    ref) => {

    const _class: string = classes.ImageInsideSvg;
    const maskId: string = `${_class}_mask`;

    return (
        <svg
            ref={ref}
            viewBox={viewBox}
            className={_class + (className ? ` ${className}` : '')}
        >
            <mask id={maskId}>{maskSVG}</mask>

            <g mask={`url(#${maskId})`}>
                <image xlinkHref={imageURL} width={imageWidth} transform={imageTransform}/>
            </g>
        </svg>
    );
});

export default ImageInsideSvg;