import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { JetBrains_Mono } from 'next/font/google';
import type { Metadata } from "next";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Bifrost Developers",
  description: "Comprehensive documentation for developers building with Bifrost protocol",
  metadataBase: new URL("https://developers.bifrost.io"),
  openGraph: {
    title: "Bifrost Developers",
    description: "Comprehensive documentation for developers building with Bifrost protocol",
    url: "https://developers.bifrost.io",
    siteName: "Bifrost Developers",
    images: [
      {
        url: "/bifrost-developers.png",
        width: 1200,
        height: 630,
        alt: "og-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bifrost Developers",
    description: "Comprehensive documentation for developers building with Bifrost protocol",
    creator: "@bifrost",
    images: ["/bifrost-developers.png"],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={jetBrainsMono.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
