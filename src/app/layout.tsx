import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./_components/Providers";
import { Toaster } from "sonner";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mewing Detector",
  description: "We are mewing company, mew and shut up!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`absolute bg-[#0C0E0F] w-full h-full ${font.className}`}>
          <Toaster position="bottom-left" expand={true} richColors />
          {children}
        </body>
      </Providers>
    </html>
  );
}
