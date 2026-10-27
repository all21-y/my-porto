import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/newsreader/wght-italic.css";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Wira Bintang A.W. — Creative Technologist & Designer",
  description:
    "Portfolio of Wira Bintang Alvarya Wibisono — designing calm, purposeful digital interfaces and tactile interactive systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-surface">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
