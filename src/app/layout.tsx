import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RKG Labs - Engineering Scalable Interfaces and Intelligent Systems",
  description: "Distinguished Technical Architect with 17+ years of experience driving innovation in enterprise software development. Specializing in React, Next.js, Angular, and 3D web experiences.",
  keywords: "Technical Architect, React, Next.js, Angular, Three.js, WebGL, AWS, Azure, Full Stack Developer",
  authors: [{ name: "Radhakrishnan Gopal" }],
  creator: "Radhakrishnan Gopal",
  openGraph: {
    title: "RKG Labs - Engineering Scalable Interfaces and Intelligent Systems",
    description: "Distinguished Technical Architect with 17+ years of experience driving innovation in enterprise software development.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
