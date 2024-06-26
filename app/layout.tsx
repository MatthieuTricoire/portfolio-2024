import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ActiveSectionContextProvider } from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/footer";
import { ThemeSwitch } from "@/components/theme-switch";
import { ThemeContextProvider } from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthieu | Portfolio",
  description:
    "Matthieu est un frontend développeur à l'écoute de nouvelles opportunités.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className}  bg-slate-50 text-gray-900 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[10rem] -z-10 right-[5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[50rem] sm:w-[80rem] dark:bg-[#946263] dark:bg-opacity-50" />
        <div className="bg-[#dbd7fb] absolute top-[-2rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[50rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] dark:bg-opacity-50" />
        <ActiveSectionContextProvider>
          <ThemeContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
            <Toaster position="top-right" />
          </ThemeContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
