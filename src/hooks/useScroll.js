import {useEffect, useState} from "react";

const useScroll = () => {
    const [windowPos, setWindowPos] = useState(window.scrollY);

    function OnWindowScroll() {
        setWindowPos(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", OnWindowScroll)

        return () => {
            window.removeEventListener("scroll", OnWindowScroll)
        }
    }, [])

    return windowPos;
}

export default useScroll