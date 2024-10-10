"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
    images: string[];
}

export const ImageSlider: React.FC<Props> = ({ images }) => {
    const [currentImage, setCurrentImage] = React.useState(0);

    function handlePreviosClick() {
        setCurrentImage((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    }
    function handleNextClick() {
        setCurrentImage((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    }

    function handleImageClick(index: number) {
        setCurrentImage(index);
    }

    return (
        <div className={cn("grid gap-6 md:gap-3 items-start")}>
            <div className="relative overflow-hidden rounded-lg">
                <Image
                    src={images[currentImage]}
                    width={600}
                    height={600}
                    alt=""
                    className="object-cover w-[600px] h-[600px]"
                />

                <div className="absolute inset-0 flex items-center justify-between px-4">
                    <Button
                        onClick={handlePreviosClick}
                        variant={"ghost"}
                        size={"icon"}>
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </Button>
                    <Button
                        onClick={handleNextClick}
                        variant={"ghost"}
                        size={"icon"}>
                        <ChevronRight className="w-6 h-6 text-white" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-5 sm:grid-cols-5 sm:gap-4">
                {images.map((image, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index)}
                            className={cn(
                                index === currentImage
                                    ? "border-2 border-primary"
                                    : "",
                                "relative overflow-hidden rounded-lg",
                            )}>
                            <Image
                                src={image}
                                alt=""
                                width={100}
                                height={100}
                                className={cn(
                                    "object-cover w-[100px] h-[100px] cursor-pointer",
                                )}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
