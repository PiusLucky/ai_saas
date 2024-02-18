import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { Suspense } from "react";
import LoadingIndicator from "@/components/shared/LoadingIndicator";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "PhotoAiSaas",
  description: "Photo generator with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <Suspense
          fallback={
          <div className="absolute top-0 left-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-purple-700 animate-spin"
            >
              <path d="M12 21a9 9 0 1 1 6.18-15.55a.75.75 0 0 1 0 1.06a.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 0 1 1.5 0a9 9 0 0 1-9 9Z" />
            </svg>
          </div>
          }
          >
          <LoadingIndicator />
          </Suspense>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
