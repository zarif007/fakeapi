import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import Providers from '@/Providers';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '../components/ui/Toast';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn('bg-white text-black antialiased', inter.style)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-black antialiased">
        <Providers>
          <Toaster position="bottom-right" />
          {children}
        </Providers>

        {/* Allowing more hights for mobile devices */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
