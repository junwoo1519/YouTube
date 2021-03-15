import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";

export const useOnViewport = (options) => {

    const ref = useRef(null);

    const [inViewport, setInViewport] = useState(false);

    const {isLoading} = useSelector(state => state.videos);

    useEffect(() => {
        if (isLoading) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setInViewport(entry.isIntersecting)
            })
        }, options)

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref, options, isLoading])

    return [ref, inViewport]
}