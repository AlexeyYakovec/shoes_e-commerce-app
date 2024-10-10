import { LoadingProductCard } from "@/components/storefront/product-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div>
            <Skeleton className="" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <LoadingProductCard />
                <LoadingProductCard />
                <LoadingProductCard />
                <LoadingProductCard />
                <LoadingProductCard />
                <LoadingProductCard />
                <LoadingProductCard />
            </div>
        </div>
    );
}
