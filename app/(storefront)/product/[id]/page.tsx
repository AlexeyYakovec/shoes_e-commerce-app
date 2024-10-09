import { addItem } from "@/app/actions";
import prisma from "@/app/lib/db";
import { FeaturedProducts, ImageSlider } from "@/components/storefront";
import { Button } from "@/components/ui/button";
import { ShoppingBag, StarIcon } from "lucide-react";
import { notFound } from "next/navigation";

async function getData(productId: string) {
    const data = await prisma.product.findUnique({
        where: {
            id: productId,
        },

        select: {
            price: true,
            images: true,
            description: true,
            name: true,
            id: true,
        },
    });

    if (!data) {
        return notFound();
    }

    return data;
}

const ProductIdRoute = async ({ params }: { params: { id: string } }) => {
    const data = await getData(params.id);
    const addProductToShoppingCart = addItem.bind(null, data.id);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
                <ImageSlider images={data.images} />

                <div>
                    <h1 className="text-3xl font-extrabold tracking-tighter text-inherit">
                        {data.name}
                    </h1>

                    <p className="text-2xl mt-2 text-gray-600">${data.price}</p>

                    <div className="mt-3 flex items-center gap-1">
                        <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    </div>

                    <p className="text-base text-inherit opacity-80 mt-6">
                        {data.description}
                    </p>

                    <form action={addProductToShoppingCart}>
                        <Button
                            size={"lg"}
                            className="w-full mt-5 text-inherit">
                            <ShoppingBag className=" mr-5 h-5 w-5" /> Add to bag
                        </Button>
                    </form>
                </div>
            </div>

            <div className="mt-16">
                <FeaturedProducts />
            </div>
        </>
    );
};

export default ProductIdRoute;
