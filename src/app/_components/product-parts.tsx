import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";
import {SplitText} from "gsap/SplitText";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ProductParts() {
    const sectionRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const capRef = useRef(null);
    const cartonRef = useRef(null);
    const liningRef = useRef(null);
    const capPointingRef = useRef(null);
    const cartonPointingRef = useRef(null);
    const liningPointingRef = useRef(null);
    const capParagraphRef = useRef(null);
    const cartonParagraphRef = useRef(null);
    const liningParagraphRef = useRef(null);

    useGSAP(() => {
        const video = videoRef.current;
        if (!video) return;

        video.load();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom+=300% top",
                scrub: 1,
                pin: true,
            }
        });

        const splitTexts = [
            new SplitText(capParagraphRef.current, {type: "lines", linesClass: "split-line"}),
            new SplitText(cartonParagraphRef.current, {type: "lines", linesClass: "split-line"}),
            new SplitText(liningParagraphRef.current, {type: "lines", linesClass: "split-line"})
        ];

        video.onloadedmetadata = () => {
            gsap.set([capRef.current, cartonRef.current, liningRef.current], {display: "none"});

            tl.to(video, {
                currentTime: 2.4,
                duration: 1,
                ease: "none"
            })
                .addPause("+=0", () => video.pause()); // freeze video at 2.4s

            tl.set(capRef.current, {display: "flex"})
                .fromTo(capPointingRef.current, {opacity: 0, width: 0}, {opacity: 1, width: "10rem", duration: 0.5})
                .fromTo(splitTexts[0].lines, {
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: 50,
                    opacity: 0
                }, {clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1, stagger: 0.1, duration: 0.5});

            tl.set(cartonRef.current, {display: "flex"})
                .fromTo(cartonPointingRef.current, {opacity: 0, width: 0}, {opacity: 1, width: "10rem", duration: 0.5})
                .fromTo(splitTexts[1].lines, {
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: 50,
                    opacity: 0
                }, {clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1, stagger: 0.1, duration: 0.5});

            tl.set(liningRef.current, {display: "flex"})
                .fromTo(liningPointingRef.current, {opacity: 0, width: 0}, {opacity: 1, width: "10rem", duration: 0.2})
                .fromTo(splitTexts[2].lines, {
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: 50,
                    opacity: 0
                }, {clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1, stagger: 0.1, duration: 0.5})
                .to([capRef.current, cartonRef.current, liningRef.current], {opacity: 0, duration: 0.5});

            tl.to(video, {
                currentTime: video.duration,
                duration: 2,
                ease: "none"
            });
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative h-screen w-full flex justify-center items-center">
            <div ref={capRef} className="absolute top-[10%] right-[20%] items-center gap-2">
                <div ref={capPointingRef} className="bg-[#222] h-[0.1px]"></div>
                <p ref={capParagraphRef} className="flex flex-col gap-1">
                    <span className="font-bold w-[14rem]">Cap</span>
                    <p>Cap based on pine tree oil, a leftover<br/>from the paper making process.</p>
                </p>
            </div>

            <div ref={cartonRef} className="absolute top-[50%] left-[15%] items-center gap-2">
                <p ref={cartonParagraphRef} className="flex flex-col gap-1">
                    <span className="font-bold w-[14rem]">Carton</span>
                    <p>Paper from FSC® certified,<br/>responsibly managed Nordic forests<br/>and other controlled
                        sources.</p>
                </p>
                <div ref={cartonPointingRef} className="bg-[#222] h-[2px]"></div>
            </div>

            <div ref={liningRef} className="absolute bottom-[20%] right-[10%] items-center gap-2">
                <div ref={liningPointingRef} className="bg-[#222] h-[2px]"></div>
                <p ref={liningParagraphRef} className="flex flex-col gap-1">
                    <span className="font-bold w-[14rem]">Lining</span>
                    <p>A thin, plastic lining that acts as barrier<br/>against the outside world.</p>
                </p>
            </div>

            <video ref={videoRef} muted preload="auto" playsInline className="object-cover">
                <source
                    src="https://cdn.jsdelivr.net/gh/zubeyranwar/lufvand@main/public/assets/product-parts-showcase.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    );
}