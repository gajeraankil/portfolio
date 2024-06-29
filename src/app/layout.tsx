"use client";

import Navigation from "@/app/components/Navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Poppins } from "next/font/google";
import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const poppins = Poppins({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffb400",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <Head>
          <link rel="icon" href="/vercel.svg" />
        </Head>
        <body className={`${poppins.className} position-relative text-white`}>
          <Navigation />
          {children}
          <ToastContainer />
        </body>
      </html>
    </ThemeProvider>
  );
}
