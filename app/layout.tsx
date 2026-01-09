import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Screening Kesehatan Ibu",
  description: "Aplikasi screening kesehatan ibu hamil berbasis web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen">
        <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
