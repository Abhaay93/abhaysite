import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar";
import { Anton, DM_Sans } from "next/font/google";
import {Analytics} from "@vercel/analytics/react"

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

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});
const sans = DM_Sans({
  weight: ["300"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Abhay's Portfolio",
  description: "Hi, I am Abhay Hipparkar , I'm a Full Stack Web Developer  working with JavaScript/TypeScript, React.js, Next.js, Node.js, TailwindCSS and numerous other tools."
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader showSpinner={false} color="gray"/>
        <Navbar/>
       <Analytics />
        {children}
      </body>
    </html>
  );
}
