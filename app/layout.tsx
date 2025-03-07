import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatProvider } from "@/providers/ChatContext";

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
    <html lang="en">
      <body
        className={inter.className}
      >
        <ChatProvider>
        {children}
        </ChatProvider>
      </body>
    </html>
  );
}
