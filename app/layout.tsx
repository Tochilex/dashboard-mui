import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidemenu from "@/components/Sidemenu";
import Upper from "@/components/Upper";
import Footer from "@/components/Footer";
import React from "react";
import { Provider } from "./Provider";

// import { CssBaseline, ScopedCssBaseline } from "@mui/material";

// import variables from "./variables.modules.scss";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Data dashboard",
  description: "Data dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <main className="">
            <Upper />
            <Sidemenu />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
