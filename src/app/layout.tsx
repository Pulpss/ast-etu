import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: "--font-bodoni",
});

export const metadata: Metadata = {
  title: "Ast Etu",
  description: "Découvrez du mobilier à couper le souffle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bodoni.variable} ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
