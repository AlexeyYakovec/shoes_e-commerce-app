import { deleteBanner, deleteProduct } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SubmitButton } from "@/components/ui/submit-button";
import Link from "next/link";

export default function BannerDeleteRoute({
    params,
}: {
    params: { id: string };
}) {
    return (
        <div className="h-[80vh] w-full flex items-center justify-center">
            <Card className="max-w-xl">
                <CardHeader>
                    <CardTitle>Are you absolutely sure?</CardTitle>
                    <CardDescription>
                        This action cannot be undone. This will permanently
                        delete this banner and remove all data from our servers.
                    </CardDescription>
                </CardHeader>
                <CardFooter className="w-full flex justify-between">
                    <Button variant="secondary" asChild>
                        <Link href="/dashboard/banner">Cancel</Link>
                    </Button>
                    <form action={deleteBanner}>
                        <input
                            type="hidden"
                            name="bannerId"
                            value={params.id}
                        />
                        <SubmitButton
                            variant="destructive"
                            text="Delete Banner"
                        />
                    </form>
                </CardFooter>
            </Card>
        </div>
    );
}
