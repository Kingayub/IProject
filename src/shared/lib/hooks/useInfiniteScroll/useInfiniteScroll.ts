import React from 'react';

export interface IUseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: React.MutableRefObject<HTMLElement>;
    wrapperRef: React.MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, wrapperRef, triggerRef }: IUseInfiniteScrollOptions) {
    const observer = React.useRef<IntersectionObserver | null>(null);

    React.useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerElement);
        }

        return () => {
            if (observer.current && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.current.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
