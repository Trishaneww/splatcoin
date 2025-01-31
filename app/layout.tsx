import type { Metadata } from "next";
import "./globals.css";
import { Coda } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const inter = Coda({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Bernie $SPLAT - DECENETRALIZE THE FUTURE",
  description:
    "Say hello to Crypto Bernie $SPLAT—the tail-wagging, blockchain-loving Bernese Mountain Dog who’s here to fetch your attention! $SPLAT isn’t just barking up the blockchain tree; he’s digging up treasures of crypto knowledge for everyone! With loyalty as big as his fluffy paws and style that’s off the leash, Bernie’s mission is simple: make crypto fun, friendly, and for everyone. Whether you’re a seasoned hodler or just sniffing around for your first token, Bernie’s got your back (and maybe a slobbery high-five too)!",
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
