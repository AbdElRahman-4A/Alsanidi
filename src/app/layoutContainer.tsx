"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AppBar from "@/components/app-bar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {usePathname} from "next/navigation";
import G from "@/code/globalData";
import Breadcrumb from "@/components/Breadcrumb";


const inter = Inter({ subsets: ["latin"] });

export default function LayoutContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <html lang="en" dir="ltr">
      <head>
        <title>Alsanidi Store</title>
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body className={inter.className}>
        {
          !G.standAlonePages.includes(path) && (
            <nav>
              <Navbar />
              <AppBar />
              <Breadcrumb />
            </nav>
          )
        }
        <main className="bg-mainBg pb-5">
          {children}
        </main>
        {
          !G.standAlonePages.includes(path) && (
            <Footer />
          )
        }
      </body>
    </html>
  );
}
