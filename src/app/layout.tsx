import "../styles/globals.css";
import { cn } from "@/utils/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("bg-white antialiased", inter.className)}>
      <body className="min-h-screen antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
