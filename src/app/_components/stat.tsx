import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Stat() {

    const sectionRef = useRef(null);
    const rightRef = useRef(null);
    const imageRef = useRef(null);
    const paragraphRef = useRef(null);
    const leftH3Ref = useRef(null);
    const rightH3Ref = useRef(null);
    const referenceRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom+=300% top",
                scrub: 1,
                pin: true,
            },
        });

        const splitTexts = [
            new SplitText(paragraphRef.current, {type: "lines", linesClass: "split-line"}),
            new SplitText(leftH3Ref.current, {type: "lines", linesClass: "split-line"}),
            new SplitText(rightH3Ref.current, {type: "lines", linesClass: "split-line"})
        ];

        tl.to(rightRef.current, {
            width: "100%",
            ease: "power2.out",
            duration: 2,
        })
            .to([paragraphRef.current, leftH3Ref.current, rightH3Ref.current], {
                display: "block",
                position: "relative",
            }, ">")

            .fromTo(
                splitTexts[0].lines,
                {
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: 50,
                    x: -50
                }, {clipPath: "inset(0% 0% 0% 0%)", y: 0, stagger: 0.1, duration: 1.8},
                ">"
            )
            .fromTo(
                splitTexts[1].lines,
                {
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: 50,
                    x: -50
                }, {clipPath: "inset(0% 0% 0% 0%)", y: 0, stagger: 0.1, duration: 1.4},
                ">"
            )
            .fromTo(
                splitTexts[2].lines,
                {
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: 50,
                    x: -50,
                }, {clipPath: "inset(0% 0% 0% 0%)", stagger: 0.1, duration: 1.4},
                ">"
            )
            .fromTo(
                referenceRef.current,
                {opacity: 0},
                {opacity: 1, ease: "power1.inOut", duration: 1.4},
            )

    }, []);

    return (
        <div className="w-full">
            <div className="w-full overflow-hidden" ref={sectionRef}>
                <div className="h-screen w-full flex border-t border-[#222] relative">
                    <div className="w-1/2 flex items-center justify-center z-10 bg-white">
                        <h3 className="text-[#323232] text-6xl lg:text-7xl xl:text-8xl leading-tight">
                            Lifecycle study <br/> results: Proven <br/> better
                        </h3>
                    </div>

                    <div
                        ref={rightRef}
                        className="w-1/2 mx-auto flex items-center border-l border-[#222] absolute top-0 right-0 h-full z-20 bg-white p-4 lg:p-8"
                    >
                        <div className="relative w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-8 px-40">
                            <h3
                                ref={leftH3Ref}
                                className="absolute hidden text-[#323232] text-center text-4xl lg:text-5xl xl:text-6xl"
                            >
                                97% plant-based materials
                            </h3>

                            <div className="flex-1 flex flex-col items-center gap-4">
                                <p
                                    ref={paragraphRef}
                                    className="absolute -top-[20rem] left-[10%] hidden text-[#000] font-light w-[400px] text-center text-lg lg:text-xl max-w-prose"
                                >
                                    The Lufvand carton does everything a plastic bottle does, but with less plastic and
                                    a smaller climate footprint
                                </p>

                                <img
                                    ref={imageRef}
                                    src="/assets/lufvand-mock.png"
                                    alt="lufvand mock"
                                    className="object-cover w-[500px] h-[700px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>

                            <h3
                                ref={rightH3Ref}
                                className="absolute hidden text-[#323232] text-center text-4xl lg:text-5xl xl:text-6xl"
                            >
                                18% lower climate impact [1]
                            </h3>
                        </div>

                        <div>
                            <p ref={referenceRef} className="absolute bottom-4 right-4 w-[400px] text-[16px]">
                                [1] The life cycle assessment of Lufvand was conducted by Anthesis, the world's largest
                                group of dedicated sustainability experts. The assessment report has undergone
                                third-party review and was performed in compliance with ISO standards 14040 and 14044.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="relative w-full flex flex-col md:flex-row justify-between items-center gap-20  border-y-[0.1px] border-y-[#222]">
                <div className="w-1/2 border-r-[0.1px] border-r-[#222]">
                    <img
                        src="/assets/lufvand-mock-2.png"
                        alt="lufvand mock"
                        className="object-contain w-full"
                        width="896"
                        height="1152"
                    />
                </div>
                <div className="w-1/2 pr-4">
                    <h3 className="text-[#323232] text-4xl lg:text-5xl xl:text-6xl max-w-[22ch]">
                        A Lufvand carton has a 18% lower climate impact throughout its entire lifecycle compared to a
                        typical plastic bottle made from 100% recycled plastic.[1]
                    </h3>

                    <div className="absolute bottom-4 right-4 w-[400px] text-[16px]">
                        <p>[1] The life cycle assessment of Lufvand was conducted by Anthesis, the world's largest group
                            of dedicated sustainability experts. The assessment report has undergone third-party review
                            and was performed in compliance with ISO standards 14040 and 14044.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}