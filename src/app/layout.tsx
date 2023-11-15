import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WalletConnect from "../../components/WalletConnect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uncommmons",
  description: "Uncommmons",
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
