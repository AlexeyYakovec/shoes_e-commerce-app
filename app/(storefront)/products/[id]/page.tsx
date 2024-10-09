import { cn } from "@/lib/utils";

import React from "react";

const ProductRoute = ({ params }: { params: { id: string } }) => {
    return (
        <div className={cn("")}>
            <h1>Product {params.id}</h1>
        </div>
    );
};

export default ProductRoute;
