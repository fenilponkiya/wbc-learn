"use client";

import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <Provider store={store}>
          <body
            className={`${poppins.variable} ${montserrat.variable} antialiased`}
          >
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              pauseOnFocusLoss
              transition={Bounce}
            />

            {children}
          </body>
        </Provider>
      </html>
    </>
  );
}
