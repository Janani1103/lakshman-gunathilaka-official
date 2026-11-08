import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgressBar } from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Lt. Col. M.D. Lakshman Gunathilaka | Senior Psychological Counselor & National Trainer",
  description: "Official portal of Lt. Col. M.D. Lakshman Gunathilaka (M.Ed, PGDC, PGDE, B.A.). In-Service Advisor in Psychosocial Counseling (MOE), National Soft Skills & Leadership Trainer. Book appointments and generate automated quotations.",
  keywords: [
    "Lakshman Gunathilaka",
    "Psychological Counselor Sri Lanka",
    "Kandy Counselor",
    "Soft Skills Trainer MOE",
    "Leadership Training Sri Lanka",
    "Trauma Counseling",
    "School Prefect Training",
    "MAS Holdings Trainer",
    "National Cadet Corps Counseling"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
        <ScrollProgressBar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
