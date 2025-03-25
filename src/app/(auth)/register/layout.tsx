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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <div className="h-screen flex">
          <div className="hidden md:flex h-full w-3/5 bg-[url('/auth/awards-hero.png')] bg-cover bg-no-repeat bg-lighter-dark-blue bg-blend-soft-light fixed top-0 left-0">
            <div className="flex h-full">
              <div className="mt-auto ml-8 mb-20">
                <span className="block text-brand-white font-medium text-2xl mb-2">
                  Are you ready to take your ambitions to the next level?
                </span>
                <span className="block text-brand-white font-normal text-xl">
                  Complete this short form to unlock unlimited connections,
                  tailored resources, and exciting opportunities awaiting you at
                  Women's Business Club.
                </span>
              </div>
            </div>
          </div>

          <div className="ml-auto md:w-2/5 w-full h-screen bg-brand-white flex flex-col overflow-auto p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
