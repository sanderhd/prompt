import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
    subsets:['latin'],
    variable:'--font-sans'
});

export const metadata: Metadata = {
    title: "Prompt",
    description:
        "Prompt is an improvised YSWS, with the main focus on building terminal applications!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                outfit.variable,
                "dark"
            )}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
