import {FC} from 'react';
import '../styles/MySliderDot.scss';
import {IMySliderDataItem} from '../../../types'

interface MySliderDotProps {
    data: IMySliderDataItem,
    index: number,
    activeSlide: number,
    setActiveSlide: (activeSlide: number) => void,
    ANIMATION_DURATION: number

}

interface IAnimationStyle {
    transition: string
}

const MySliderDot: FC<MySliderDotProps> =
    ({
         data,
         index,
         activeSlide,
         setActiveSlide,
         ANIMATION_DURATION
    }) => {
        const animationStyle: IAnimationStyle = {transition: `all ${ANIMATION_DURATION}ms`};

        return (
            <li
                onClick={() => setActiveSlide(index)}
                className={index === activeSlide ? 'MySliderDot _active' : 'MySliderDot'}
                style={animationStyle}
            >
                <div
                    className="MySliderDot__line"
                    style={animationStyle}
                />
                {`0${index + 1}`}<span className="MySliderDot__name"> {data.name}</span>
            </li>
        );
    };

export default MySliderDot;