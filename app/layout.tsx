
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TanTasTic | Online Assessment",
  description:
    "Turn your learning materials into smart assessments with TanTasTic Online Assessment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
