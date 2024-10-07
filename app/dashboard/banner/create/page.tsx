"use client";

import { createBanner } from "@/app/actions";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { bannerSchema } from "@/app/lib/zodSchemas";
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
import { SubmitButton } from "@/components/ui/submit-button";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function BannerCreateRoute() {
    const [image, setImages] = useState<string | undefined>(undefined);
    const [lastResult, action] = useFormState(createBanner, undefined);

    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, {
                schema: bannerSchema,
            });
        },

        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    });

    return (
        <form id={form.id} onSubmit={form.onSubmit} action={action}>
            <div className="flex items-center gap-x-4">
                <Button asChild variant={"outline"} size={"icon"}>
                    <Link href={"/dashboard/banner"}>
                        <ChevronLeft className="w-4 h-4" />
                    </Link>
                </Button>

                <h1 className="text-xl font-semibold tracking-tight">
                    New banner
                </h1>
            </div>

            <Card className="mt-4">
                <CardHeader>
                    <CardTitle>Banner Details</CardTitle>
                    <CardDescription>
                        Create your banner right here
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex flex-col gap-3">
                            <Label>Name</Label>
                            <Input
                                name={fields.title.name}
                                key={fields.title.key}
                                defaultValue={fields.title.initialValue}
                                type="text"
                                placeholder="Create title for Banner"
                            />
                            <p className="text-sm text-red-600">
                                {fields.title.errors}
                            </p>
                        </div>

                        <div>
                            <Label className="mb-4">Images</Label>
                            <input
                                type="hidden"
                                value={image}
                                key={fields.imageString.key}
                                name={fields.imageString.name}
                                defaultValue={fields.imageString.initialValue}
                            />
                            {image !== undefined ? (
                                <Image
                                    src={image}
                                    alt="Banner Image"
                                    width={200}
                                    height={200}
                                    className="w-[200px] h-[200px] object-cover border rounded-lg"
                                />
                            ) : (
                                <UploadDropzone
                                    onClientUploadComplete={(res) => {
                                        setImages(res[0].url);
                                    }}
                                    onUploadError={() => {
                                        alert("Something went wrong");
                                    }}
                                    endpoint="bannerImageRoute"
                                />
                            )}

                            <p className="text-sm text-red-600">
                                {fields.imageString.errors}
                            </p>
                        </div>
                    </div>
                </CardContent>

                <CardFooter>
                    <SubmitButton text="Create Banner" />
                </CardFooter>
            </Card>
        </form>
    );
}
