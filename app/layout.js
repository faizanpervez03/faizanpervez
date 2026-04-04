import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/app/components/common/Navigation";
import { Footer } from "@/app/sections/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Faizan Pervez - MERN Stack Developer",
  description: "Full-stack developer specializing in React, Node.js, MongoDB, and Express. Building high-performance scalable applications.",
  authors: [{ name: "Faizan Pervez", url: "https://faizanpervez.dev" }],
  keywords: [
    "MERN stack",
    "Full stack developer",
    "React developer",
    "Node.js",
    "MongoDB",
    "Web development",
    "JavaScript",
  ],
  openGraph: {
    title: "Faizan Pervez - MERN Stack Developer",
    description: "Full-stack developer specializing in React, Node.js, MongoDB, and Express",
    type: "website",
    url: "https://faizanpervez.dev",
    images: [
      {
        url: "https://faizanpervez.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faizan Pervez Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faizan Pervez - MERN Stack Developer",
    description: "Full-stack developer specializing in React, Node.js, MongoDB, and Express",
    creator: "@faizanpervez",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-gray-950 text-white overflow-x-hidden antialiased">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
