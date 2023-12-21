import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WalletConnect from "../../components/WalletConnect";
import "./index.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Uncommmons";
const description =
    "Uncommons is a digital commons a digital garden for public goods builders";

export const metadata: Metadata = {
    title,
    description,
    generator: "Uncommmons",
    applicationName: "Uncommmons",
    referrer: "origin-when-cross-origin",
    keywords: ["Uncommmons", "dao", "web3", "lxdao"],
    authors: [{ name: "Uncommmons" }],
    creator: "Uncommmons",
    publisher: "Uncommmons",

    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },

    openGraph: {
        title,
        description,
        url: "https://uncommons.cc",
        siteName: "Uncommmons",
        images: [
            {
                url: "https://uncommons.cc/logo.png",
                width: 800,
                height: 600,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        creator: "@Un__commons",
        images: ["https://uncommons.cc/logo.png"],
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <WalletConnect>
                    <Header />
                    {children}
                    <Footer />
                </WalletConnect>
            </body>
        </html>
    );
}
