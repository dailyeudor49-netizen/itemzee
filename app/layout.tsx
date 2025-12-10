import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FacebookPixel from "./components/FacebookPixel";
import GoogleAdsPixel from "./components/GoogleAdsPixel";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: { default: "Itemzee | Tech Wholesale Hub", template: "%s | Itemzee" },
  description: "Your trusted wholesale partner for consumer electronics. Fast EU delivery, competitive pricing, reliable service.",
  keywords: ["wholesale electronics", "tech distributor", "electronics supplier", "bulk electronics"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <FacebookPixel />
        <GoogleAdsPixel />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
