import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Induction Portal | IC NITP",
  description: "Induction Portal of Incubation Center NIT Patna (IC NITP) — a platform for student onboarding, registrations, announcements, schedules, resources, and induction program management for new students and participants.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#020817] text-white">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
