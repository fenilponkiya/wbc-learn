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
            <div className="w-3/5 mt-auto ml-8 mb-20">
              <span className="block text-brand-white font-medium text-2xl mb-2 ">
                Are you ready to take your ambitions to the next level ?
              </span>
              <span className="block text-brand-white font-normal text-xl">
                Complete this short form to unlock unlimited connections,
                tailored resources and exciting opportunities awaiting you at
                Women's BusinessClub.{" "}
              </span>
            </div>

            <div className="h-screen bg-brand-white w-2/5 flex flex-col justify-center">
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
