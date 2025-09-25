import {ProductCard} from "./product-card.tsx";

export function FeaturedProduct() {
    return (
        <div className="w-full h-screen">
            <div className="flex">
                {Array.from({length: 1}).map((_, i) => (
                    <ProductCard key={i}/>
                ))}
            </div>
        </div>
    )
}