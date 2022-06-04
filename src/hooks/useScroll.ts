import {useEffect, useState} from "react";

const useScroll = (blockStart: number, blockEnd: number): number => {
    const [animationPercent, setAnimationPercent] = useState<number>(0);

    useEffect(() => {
        function OnWindowScroll() {
            let percent = (window.scrollY - blockStart) / (blockEnd - blockStart);
            if (percent < 0) percent = 0;
            if (percent > 1) percent = 1;
            setAnimationPercent(percent);
        }

        OnWindowScroll();
        window.addEventListener("scroll", OnWindowScroll)

        return () => {
            window.removeEventListener("scroll", OnWindowScroll)
        }
    }, [blockStart, blockEnd])

    return animationPercent;
}

export default useScroll