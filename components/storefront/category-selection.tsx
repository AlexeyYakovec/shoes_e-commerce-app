import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import men from "@/products/Men/creaslim-SrqCf0SBaS8-unsplash.jpg";
import women from "@/products/Women/luis-santoyo-JD1Md2OUtN8-unsplash.jpg";
import gazelle from "@/products/Adidas Gazelle Bold 'Cream Collegiate Green'/karsten-winegeart-JEB9POyoKbE-unsplash.jpg";

interface Props {
    className?: string;
}

export const CategorySelection: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("py-24 sm:py-32", className)}>
            <div className="flex justify-between">
                <h2 className="text-2xl font-extrabold tracking-tight">
                    Shop by Category
                </h2>

                <Link
                    href={"/products/all"}
                    className="text-sm font-semibold text-primary hover:text-primary/80">
                    Browse all Products &rarr;
                </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-xl sm:aspect-w-1 sm:row-span-2">
                    <Image
                        src={gazelle}
                        alt="All Products"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex items-end">
                        <Link href={"/products/all"}>
                            <h3 className="text-white font-semibold">
                                All products
                            </h3>
                            <span className="text-white mt-1 text-sm">
                                Shop Now
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-xl sm:relative sm:aspect-none sm:h-full">
                    <Image
                        src={men}
                        alt="Products for Men"
                        className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href={"/products/men"}>
                            <h3 className="text-white font-semibold">
                                Products for Men
                            </h3>
                            <span className="text-white mt-1 text-sm">
                                Shop Now
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-xl sm:relative sm:aspect-none sm:h-full">
                    <Image
                        src={women}
                        alt="Products for Women"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href={"/products/women"}>
                            <h3 className="text-white font-semibold">
                                Products for Women
                            </h3>
                            <span className="text-white mt-1 text-sm">
                                Shop Now
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
