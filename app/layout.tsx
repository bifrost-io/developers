import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={jetBrainsMono.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
