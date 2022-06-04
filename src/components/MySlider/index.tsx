import {FC} from 'react';
import './styles/MySlider.scss'
import MySliderSlide from "./components/MySliderSlide";
import {IMySliderDataItem} from '../../types'
import MySliderDots from "./components/MySliderDots";

interface MySliderProps {
    data: IMySliderDataItem[],
    activeSlide: number,
    ANIMATION_DURATION: number
}

const MySlider: FC<MySliderProps> =
    ({
         data,
         activeSlide,
         ANIMATION_DURATION
     }) => {

        return (
            <div className="MySlider">
                {data.map((item, index) => {
                    return (
                        <MySliderSlide
                            key={index}
                            index={index}
                            data={item}
                            activeSlide={activeSlide}
                            ANIMATION_DURATION={ANIMATION_DURATION}
                        />
                    )
                })}
            </div>
        );
    };

export default MySlider;
export {MySliderDots};