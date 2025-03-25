import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "../../globals.css";

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

export const metadata: Metadata = {
  title: "Women's Business Club",
  description: "Login",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <div
          className="basic-3/5 bg-[url('/auth/awards-hero.png')] bg-cover bg-repeat-none
 bg-lighter-dark-blue bg-blend-soft-light hidden md:block"
        >
          <div className="flex">
            <div className="w-3/5 mt-auto ml-12 mb-20">
              <span className="block text-brand-white font-medium text-3xl ">
                Welcome to
              </span>
              <span className="block text-brand-white font-bold text-5xl">
                Women's Business Club
              </span>
              <span className="block text-brand-white font-medium text-3xl">
                Empowering ambitious women to succeed
              </span>
            </div>
            <div className="h-screen bg-brand-white w-2/5 flex flex-col justify-center overflow-auto">
              {children}
            </div>
          </div>
        </div>
        <div className="h-screen bg-brand-white  flex flex-col justify-center md:hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
