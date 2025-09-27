import {Hero} from "./_components/hero.tsx";
import Stat from "./_components/stat.tsx";
import ParallaxText from "./_components/parallax-text.tsx";
import {Text} from "../components/Text.tsx";
import ProductParts from "./_components/product-parts.tsx";
import VideoShowcase from "./_components/video-showcase.tsx";

export default function Page() {
    return (
        <main className="relative w-full">
            <Hero/>
            <Stat/>
            <ProductParts/>
            <div
                className="relative w-full flex flex-col md:flex-row justify-between items-center gap-20  border-y-[0.1px] border-y-[#222]">
                <div className="w-1/2 pl-10">
                    <h3 className="text-[#323232] text-4xl lg:text-5xl xl:text-6xl max-w-[22ch]">
                        As a certified B Corp, we use business for good: 3% of sales fund climate work
                    </h3>
                </div>
                <div className="w-1/2 border-r-[0.1px] border-r-[#222]">
                    <img
                        src="/assets/certified.png"
                        alt="lufvand mock"
                        className="object-contain w-full"
                        width="1000"
                        height="1001"
                    />
                </div>
            </div>
            <VideoShowcase/>
            <div className="w-full border-t-[0.1px] border-t-[#222]">
                <div className="w-full flex flex-col gap-20 pt-20">
                    <h3 className="text-4xl lg:text-5xl xl:text-6xl max-w-[22ch] px-6">Refreshing, local water. Minimum
                        climate impact.</h3>

                    <div className="w-full flex items-center overflow-hidden">
                        <img
                            src="/assets/product-image.webp"
                            alt="Product Image"
                            width="832"
                            height="1040"
                            className="object-cover max-h-[600px]"
                        />
                        <img
                            src="/assets/product-image-2.webp"
                            alt="Product Image"
                            width="832"
                            height="1040"
                            className="object-cover max-h-[600px]"
                        />
                        <img
                            src="/assets/product-image-3.webp"
                            alt="Product Image"
                            width="832"
                            height="1040"
                            className="object-cover max-h-[600px]"
                        />
                    </div>
                </div>
            </div>
            <div className="h-[40vh] w-full flex border-y-[0.1px] border-t-[#222]">
                <div className="w-full self-center">
                    <Text animateOnScroll delay={0.4}><h4 className="w-full pl-8 text-3xl lg:text-4xl xl:text-5xl max-w-[22ch] px-6">Start the future. Join our mission</h4></Text>
                </div>
                <div className="border-r-[1px] border-t-[#222 h-full"></div>
                <div
                    className="w-full border-r-[0.1px] border-r-[#222]  flex flex-col">
                    <div className="h-full flex flex-col justify-center">
                        <div className="px-10">
                            <h5 className="font-semibold uppercase">Buy online</h5>
                            <a className="underline hover:no-underline">Visit our shop</a>
                        </div>
                    </div>
                    <div className="h-full flex flex-col justify-center border-t-[0.1px] border-t-[#222]">
                        <div className="px-10">
                            <h5 className="font-semibold uppercase">Buy online</h5>
                            <a className="underline hover:no-underline">See stockists</a>
                        </div>
                    </div>
                    <div className="h-full flex flex-col justify-center border-t-[0.1px] border-t-[#222]">
                        <div className="px-10">
                            <h5 className="font-semibold uppercase">Become seller</h5>
                            <a className="underline hover:no-underline">Learn how</a>
                        </div>
                    </div>
                </div>
            </div>
            <ParallaxText />
        </main>
    );
}
