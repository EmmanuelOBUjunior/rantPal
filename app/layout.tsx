import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatProvider } from "@/providers/ChatContext";
import { ThemeProvider } from "@/providers/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RantAI - Therapy for Developers",
  description: "Vent your developer frustrations and get hilariously bad advice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <ThemeProvider>
        <ChatProvider>
        {children}
        </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
