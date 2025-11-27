import './globals.css';
import { Inter } from 'next/font/google';
import ClientNavbarSwitcher from './components/Navbar/ClientNavbarSwitcher';
import Footer from './components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CSE Department | Home',
  description: 'Computer Science and Engineering Department Website',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Force favicon load */}
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Compatibility (optional but recommended) */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>

      <body className={inter.className}>
        {/* Navbar switcher: shows HomeNavbar on "/" else your existing Navbar */}
        <ClientNavbarSwitcher />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
