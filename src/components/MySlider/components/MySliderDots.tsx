import {FC} from 'react';
import '../styles/MySliderDots.scss'
import MySliderDot from "./MySliderDot";
import {IMySliderDataItem} from "../../../types";

interface MySliderDotsProps {
    data: IMySliderDataItem[],
    activeSlide: number,
    setActiveSlide: (activeSlide: number) => void,
    ANIMATION_DURATION: number
}

const MySliderDots: FC<MySliderDotsProps> =
    ({
         data,
         activeSlide,
         setActiveSlide,
         ANIMATION_DURATION
    }) => {
        return (
            <ul className="MySliderDots">
                {data.map((item, index) => {
                    return (
                        <MySliderDot
                            key={index}
                            index={index}
                            data={item}
                            activeSlide={activeSlide}
                            setActiveSlide={setActiveSlide}
                            ANIMATION_DURATION={ANIMATION_DURATION}
                        />
                    )
                })}
            </ul>
        );
    };

export default MySliderDots;