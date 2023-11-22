import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WalletConnect from "../../components/WalletConnect";

const inter = Inter({ subsets: ["latin"] });

const title = "Uncommmons";
const description =
  "Uncommons isa digital commons digital garden public goods builders";

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
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  openGraph: {
    title,
    description,
    url: "https://uncommons.cc",
    siteName: "Uncommmons",
    images: [
      {
        url: "https://uncommons.cc/logo.svg",
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
    images: ["https://uncommons.cc/logo.svg"],
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
