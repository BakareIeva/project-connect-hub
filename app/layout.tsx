import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ieva Bakare — Immigration & Administrative Law | Vilnius, Lithuania",
  description:
    "Personal website of Ieva Bakare, a legal professional specialising in immigration and administrative law in Lithuania. Insights, articles, and professional background.",
  keywords: "immigration law Lithuania, administrative law Lithuania, immigration legal professional Vilnius, Lithuanian immigration insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
