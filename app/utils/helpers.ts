import { type MutableRefObject, useEffect, useRef, useState } from "react";
import throttle from "lodash/throttle";

export default function useVisibility<Element extends HTMLElement>(
    offset = 0,
    throttleMilliseconds = 100
): [Boolean, MutableRefObject<Element | undefined>] {
    const [isVisible, setIsVisible] = useState(false);
    const currentElement = useRef<Element>();

    const onScroll = throttle(() => {
        if (!currentElement.current) {
            setIsVisible(false);
            return;
        }
        const top = currentElement.current.getBoundingClientRect().top;
        setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
    }, throttleMilliseconds);

    useEffect(() => {
        document.addEventListener('scroll', onScroll, true);
        return () => document.removeEventListener('scroll', onScroll, true);
    });

    return [isVisible, currentElement];
}
