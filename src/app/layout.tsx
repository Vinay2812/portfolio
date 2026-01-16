import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vinay Sarda | Full Stack Developer",
  description:
    "Full Stack Software Engineer specializing in React, Next.js, Node.js, and cloud technologies. Building scalable web applications with modern technologies.",
  keywords: [
    "Vinay Sarda",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Vinay Sarda" }],
  openGraph: {
    title: "Vinay Sarda | Full Stack Developer",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, Node.js, and cloud technologies.",
    type: "website",
    images: [
      {
        url: "/avatar.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" >
      <link rel="icon" href="/avatar.svg" />
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
