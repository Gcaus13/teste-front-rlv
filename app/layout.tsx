"use client";

import "./globals.css";
import { Roboto } from "next/font/google";
import { MediaQueryProvider } from "@/components/contextApp";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <MediaQueryProvider>
          <div className="h-screen flex flex-col overflow-hidden">
            {/* Navbar */}
            <Navbar toggleSidebar={toggleSidebar} />

            <div className="flex flex-1">
              {/* Sidebar */}
              <Sidebar isOpen={isOpen} />

              {/* Main Content */}
              <main
                className={`flex-1 overflow-auto bg-white ${
                  isOpen ? "ml-[15.75rem]" : "ml-[4rem]"
                } transition-all duration-300`}
              >
                {children}
              </main>
            </div>
          </div>
        </MediaQueryProvider>
      </body>
    </html>
  );
}
