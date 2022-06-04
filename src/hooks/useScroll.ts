import {useEffect, useState} from "react";

const useScroll = (): number => {
    // TODO: Fix that the hook triggers rendering on every scroll, even if animationPercent doesn't change
    const [windowPos, setWindowPos] = useState<number>(0);

    function OnWindowScroll() {
        setWindowPos(window.scrollY)
    }

    useEffect(() => {
        OnWindowScroll();
        window.addEventListener("scroll", OnWindowScroll)

        return () => {
            window.removeEventListener("scroll", OnWindowScroll)
        }
    }, [])

    return windowPos;
}

export default useScroll