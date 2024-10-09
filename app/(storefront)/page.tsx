import {
    Hero,
    CategorySelection,
    FeaturedProducts,
} from "@/components/storefront/index";

export default function IndexPage() {
    return (
        <div>
            <Hero />
            <CategorySelection />
            <FeaturedProducts />
        </div>
    );
}
