import { cn } from "@/lib/utils";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
    item: {
        id: string;
        name: string;
        description: string;
        price: number;
        images: string[];
    };
}

export const ProductCard: React.FC<Props> = ({ item }) => {
    const { id, name, description, price, images } = item;

    return (
        <div className={cn("rounded-lg")}>
            <Carousel>
                <CarouselContent className="w-full mx-auto">
                    {item.images.map((item, index) => {
                        return (
                            <CarouselItem key={index} className="pl-0">
                                <div className="relative h-[330px]">
                                    <Image
                                        src={item}
                                        alt={name}
                                        fill
                                        className="object-cover object-center w-full h-full rounded-lg"
                                    />
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="ml-16 " />
                <CarouselNext className="mr-16 " />
            </Carousel>

            <div className="flex justify-between items-center mt-2">
                <h1 className="font-semibold text-xl"> {item.name} </h1>
                <h3 className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                    ${item.price}
                </h3>
            </div>

            <p className="text-gray-600 text-sm mt-2 line-clamp-2 h-[40px]">
                {item.description}
            </p>

            <Button className="w-full mt-5">
                <Link href={`/product/${item.id}`}>Learn More!</Link>
            </Button>
        </div>
    );
};
