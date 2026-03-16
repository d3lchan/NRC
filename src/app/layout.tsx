import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navasheen Roy Chowdhury | Automotive Design Engineer",
  description:
    "Portfolio of Navasheen Roy Chowdhury — Automotive Design Engineer at Desmania Pvt. Ltd. Specializing in vehicle design, CAD/CAE, and transportation engineering.",
  keywords: [
    "Automotive Design",
    "Mechanical Engineer",
    "CATIA V5",
    "SolidWorks",
    "Vehicle Design",
    "Transportation Engineering",
  ],
  authors: [{ name: "Navasheen Roy Chowdhury" }],
  openGraph: {
    title: "Navasheen Roy Chowdhury | Automotive Design Engineer",
    description:
      "Portfolio of Navasheen Roy Chowdhury — Automotive Design Engineer specializing in vehicle design and transportation engineering.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
