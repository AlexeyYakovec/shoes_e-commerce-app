import { cn } from "@/lib/utils";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import prisma from "@/app/lib/db";
import Image from "next/image";

interface Props {
    className?: string;
}

async function getData() {
    const data = await prisma.banner.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
}

export const Hero: React.FC<Props> = async ({ className }) => {
    const data = await getData();

    return (
        <div className={cn("", className)}>
            <Carousel>
                <CarouselContent>
                    {data.map((item) => {
                        return (
                            <CarouselItem key={item.id}>
                                <div className="relative h-[60vh] lg:h-[80vh]">
                                    <Image
                                        src={item.imageString}
                                        alt={item.title}
                                        className="object-cover w-full h-full rounded-xl"
                                        fill
                                    />
                                    <div className="absolute top-6 left-6 bg-opacity-75 bg-black text-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105">
                                        <h1 className="text-xl lg:text-4xl font-bold">
                                            {item.title}
                                        </h1>
                                    </div>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="ml-16" />
                <CarouselNext className="mr-16" />
            </Carousel>
        </div>
    );
};
