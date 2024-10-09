import type { Metadata } from "next";
import { Noto_Sans as FontSans } from "next/font/google";
import "./globals.css";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { ThemeProvider } from "@/components/ui/theme-provider";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "como Shoes",
    description: "como Shoes",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fontSans.className} antialiased flex flex-col`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange>
                    <NextSSRPlugin
                        /**
                         * The `extractRouterConfig` will extract **only** the route configs
                         * from the router to prevent additional information from being
                         * leaked to the client. The data passed to the client is the same
                         * as if you were to fetch `/api/uploadthing` directly.
                         */
                        routerConfig={extractRouterConfig(ourFileRouter)}
                    />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
