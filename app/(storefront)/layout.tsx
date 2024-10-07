import { Navbar } from "@/components/storefront/index";

interface Props {
    children: React.ReactNode;
}
export default function StoreFrontLayout({ children }: Props) {
    return (
        <div>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}
