'use client'
import { parseCookies,setCookie } from "nookies";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "@/components/common/module/header";


// const ReduxProvider = dynamic(() => import("@/redux/redux-provider"), {
//   ssr: false
// });

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        {/* <ReduxProvider >  */}
        {parseCookies().message === 'SUCCESS' && <Header/>}
          {children}
          {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
