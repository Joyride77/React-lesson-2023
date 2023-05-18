import { useEffect, useState } from "react";
import LocomotiveScroll, { LocomotiveScrollOptions, Scroll } from "locomotive-scroll"
// import "locomotive-scroll/src/locomotive-scroll.scss";

type UseLocomotiveScrollHook = [Scroll | null];

type Props = {
    ref: React.RefObject<Element>;
} & Omit<LocomotiveScrollOptions, 'el'>;

const useLocomotiveScroll = ({ ref, smooth }: Props): UseLocomotiveScrollHook => {
    const [locomotiveScrollRef, setRef] = useState<Scroll | null>(null);
    useEffect(() => {
        if (ref?.current) {
            import('locomotive-scroll').then(locomotiveModule => {
                const scroll = new locomotiveModule.default({
                    el: ref.current,
                    smooth,
                    lerp: 0.05,
                    smooth: true,
                    smartphone: {
                        smooth: true
                    },
                    tablet: {
                        smooth: true
                    }
                });

                setRef(scroll);
            });
        }

        return () => {
            locomotiveScrollRef?.destroy();
        };
    }, [ref]);
    return [locomotiveScrollRef];
}

export default useLocomotiveScroll;