"use client";

import { UploadDropzone } from "@/app/lib/uploadthing";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductCreateRoute = () => {
    return (
        <form>
            <div className="flex items-center gap-4">
                <Button variant={"outline"} size={"icon"}>
                    <Link href={"/dashboard/products"}>
                        <ChevronLeft className="w-4 h-4" />
                    </Link>
                </Button>

                <h1 className="text-xl font-semibold tracking-tight">
                    New Product
                </h1>
            </div>

            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>
                        In this section you can create a new product
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <Label>Name</Label>
                            <Input
                                placeholder="Product Name"
                                type="text"
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Description</Label>
                            <Textarea placeholder="Write your description..." />
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Price</Label>
                            <Input
                                type="number"
                                placeholder="$55"
                                className="w-40"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Featured Product</Label>
                            <Switch />
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Status</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="draft">Draft</SelectItem>
                                    <SelectItem value="published">
                                        Published
                                    </SelectItem>
                                    <SelectItem value="archived">
                                        Archived
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Images</Label>
                            <UploadDropzone
                                endpoint="imageUploader"
                                onClientUploadComplete={(res) => {
                                    alert("Finished uploading");
                                }}
                                onUploadError={() => {
                                    alert("Something went wrong!");
                                }}
                            />
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex">
                    <Button className="ml-auto">Create Product</Button>
                </CardFooter>
            </Card>
        </form>
    );
};

export default ProductCreateRoute;
