import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function VideoShowcase() {
    const sectionRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const firstParagraphRef = useRef(null);
    const lastParagraphRef = useRef(null);

    useGSAP(() => {
        const video = videoRef.current;
        if (!video) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom+=200% top",
                scrub: 1,
                pin: true,
            }
        })

        const splitTexts = [
            new SplitText(firstParagraphRef.current, {type: "lines", linesClass: "split-line"}),
            new SplitText(lastParagraphRef.current, {type: "lines", linesClass: "split-line"}),
        ];

        video.onloadedmetadata = () => {
            tl.to(video, {
                currentTime: video.duration,
                duration: video.duration,
                ease: "none",
            });

            tl.set([firstParagraphRef.current, lastParagraphRef.current], {autoAlpha: 0}, 0);

            tl.addLabel("showFirst", 2);
            tl.to(firstParagraphRef.current, {autoAlpha: 1}, "showFirst")
                .from(splitTexts[0].lines, {
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: 40,
                    autoAlpha: 0,
                    stagger: 0.25,
                    duration: 0.8,
                    ease: "power3.out",
                }, "showFirst");

            tl.to(firstParagraphRef.current, {autoAlpha: 0}, "showFirst+=1");

            tl.addLabel("showSecond", 4);
            tl.to(lastParagraphRef.current, {autoAlpha: 1}, "showSecond")
                .from(splitTexts[1].lines, {
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: 40,
                    autoAlpha: 0,
                    stagger: 0.25,
                    duration: 0.8,
                    ease: "power3.out",
                }, "showSecond");

            tl.to(lastParagraphRef.current, {autoAlpha: 0}, "showSecond+=1");
        };

    }, [])

    return (
        <div ref={sectionRef} className="relative w-full h-screen flex justify-center items-center">
            <div className="w-[20rem] absolute top-[10%] right-[4%]">
                <p ref={firstParagraphRef}>
                    The water we use comes from a public source in Tossa,
                </p>
                <p ref={lastParagraphRef}>
                    supporting common water supplies and securing quality water for generations to come.
                </p>
            </div>

            <video ref={videoRef} muted preload="auto" playsInline className="object-cover ">
                <source src="https://postevand-storage.fra1.cdn.digitaloceanspaces.com/mp4-2025/section-3-desktop-900-264-crf-20-g-1.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}