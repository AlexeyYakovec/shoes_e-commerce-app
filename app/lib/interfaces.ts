export type Cart = {
    userId: string;
    items: Array<{
        id: string;
        name: string;
        price: number;
        quantity: number;
        imageString: string;
    }>;
};

export interface buttonProps {
    text: string;
    variant?:
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | "link"
        | null
        | undefined;
}
