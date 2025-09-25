import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    wrap,
} from "framer-motion";
import {useRef} from "react";

export default function ParallaxText({ baseVelocity = -5 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

    const directionFactor = useRef(1);

    useAnimationFrame((_, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden pb-5 flex flex-nowrap whitespace-nowrap m-0">
            <motion.div className="text-[#f5f5f5] flex flex-nowrap whitespace-nowrap gap-x-5" style={{x}}>
                <DisplayText />
                <DisplayText />
            </motion.div>
        </div>
    );
}

export function DisplayText() {
    const newYear = new Date().getFullYear()
    return (
        <>
            <div className=" flex flex-nowrap whitespace-nowrap items-center gap-x-4">
                <h1 className="text-[9rem] leading-[1] space-x-2 block">
                    <span className=" font-cabinet uppercase">Experimental</span>
                    <span className=" font-fraunces">[{newYear}]</span>
                </h1>
                <div className="animate-spin duration-75 ease-linear infinite">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 77 77"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M41.5329 0.5H36.1043V31.9471L13.8678 9.71063L10.0293 13.5492L32.2657 35.7857H0.818604V41.2143H32.2657L10.0293 63.4508L13.8678 67.2892L36.1043 45.0527V76.5H41.5329V45.0527L63.7694 67.2892L67.6078 63.4508L45.3713 41.2143H76.8186V35.7857H45.3713L67.6078 13.5492L63.7694 9.71063L41.5329 31.9471V0.5Z"
                            fill="#F5F5F5"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
}