import type { Metadata } from "next";
import "@/app/globals.css";
import Providers from "@/app/providers";

export const metadata: Metadata = {
  title: "PlotWise",
  description: "Real Estate Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
