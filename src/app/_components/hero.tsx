import {LogoLarge} from "./logo-large.tsx";

export const Hero = () => {
    return (
        <div className="relative overflow-hidden" style={{ height: `calc(100vh - 1px)` }}>
            <img
                src="/assets/home-hero.webp"
                alt="Hero Mobile"
                className="block lg:hidden w-full h-full object-cover object-bottom"
            />

            <img
                src="/assets/home-hero.webp"
                alt="Hero Desktop"
                className="hidden lg:block w-full h-full object-cover object-[50%_34%]"
            />

            <div className="absolute bottom-8 left-6">
                <LogoLarge />
            </div>
        </div>
    )
}