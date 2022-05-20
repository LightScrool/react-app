import {useEffect, useState} from "react";

const useScroll = () => {
    const [windowPos, setWindowPos] = useState(0);

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