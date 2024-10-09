import prisma from "@/app/lib/db";
import { cn } from "@/lib/utils";
import React from "react";
import { ProductCard } from ".";

interface Props {
    className?: string;
}

async function getData() {
    const data = await prisma.product.findMany({
        where: {
            status: "published",
        },
        select: {
            id: true,
            name: true,
            description: true,
            images: true,
            price: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
}

export const FeaturedProducts: React.FC<Props> = async ({ className }) => {
    const data = await getData();

    return (
        <>
            <h2 className="text-2xl font-extrabold tracking-tight">
                Featured Products
            </h2>

            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.map((item) => {
                    return <ProductCard key={item.id} item={item} />;
                })}
            </div>
        </>
    );
};
