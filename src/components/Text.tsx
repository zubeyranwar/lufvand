import * as React from "react";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import gsap from "gsap";

interface TextProps {
    children: React.ReactNode;
    animateOnScroll: boolean;
    delay: number;
}

gsap.registerPlugin(SplitText)

export const Text = ({children, animateOnScroll, delay}:TextProps) => {
    const containerRef = useRef(null);
    const elementRef = useRef([]);
    const splitRef = useRef([]);
    const lines = useRef([]);

    useGSAP(() => {
        if (!containerRef.current) return

        splitRef.current = [];
        elementRef.current = [];
        lines.current = [];

        let elements = []
        if(containerRef.current.hasAttribute("data-copy-wrapper")) {
            elements = Array.from(containerRef.current.children);
        } else {
            elements = [containerRef.current];
        }

        elements.forEach((element) => {
            elementRef.current.push(element);

            const split = SplitText.create(element, {
                type: "lines",
                mask: "lines",
                linesClass: "line++",
            });

            splitRef.current.push(split);

            const computedStyle = window.getComputedStyle(element);
            const textIndent = computedStyle.textIndent;


            if (textIndent && textIndent !== "0px") {
                if(split.lines.length > 0) {
                    split.lines[0].style.paddingLeft = textIndent;
                }
                element.style.textIndent = "0";
            }

            lines.current.push(...split.lines);
        });

        gsap.set(lines.current, {y: "100%" })

        const animateProps = {
            y: "0%",
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: delay,
        }

        if(animateOnScroll) {
            gsap.to(lines.current, {
                ...animateProps,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    once: true
                }
            })
        } else {
            gsap.to(lines.current, animateProps)
        }

        return () => {
            splitRef.current.forEach((split) => {
                if(split){
                    split.revert()
                }
            })
        }
    }, {
        scope: containerRef,
        dependencies: [animateOnScroll, delay]
    })

    if(React.Children.count(children) === 1){
        return React.cloneElement(children, {ref: containerRef})
    }

    return (
        <div ref={containerRef} data-copy-wrapper={true}>
            {children}
        </div>
    )
}
