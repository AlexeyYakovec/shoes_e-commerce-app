import { Footer, Navbar } from "@/components/storefront/index";

interface Props {
    children: React.ReactNode;
}
export default function StoreFrontLayout({ children }: Props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar className="w-full mb-8" />
            <main className="max-w-7xl flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </main>
            <Footer className="w-full" />
        </div>
    );
}
