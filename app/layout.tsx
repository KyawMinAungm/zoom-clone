import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/toaster";
import  '@stream-io/video-react-sdk/dist/css/styles.css'


const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoom Clone",
  description: "video confrencing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          logoImageUrl: "icons/logo.svg",
        },
        variables: {
          colorPrimary: "#0E78F9",
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252A41",
        },
      }}
    >
      <html lang="en">
        <body className={`${outfit.className} bg-dark-2 `}>
          {children}
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}
