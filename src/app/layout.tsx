import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "../components/nav/Nav";
import clsx from "clsx";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-primary-4 text-primary-12")}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
