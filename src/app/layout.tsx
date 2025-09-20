import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css"; // Важно! Добавь импорт стилей
import { MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "SEO Analyzer",
  description: "Анализатор SEO параметров веб-страниц",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ minHeight: 100 + "vh" }}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
