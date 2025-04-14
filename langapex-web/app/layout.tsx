import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lang Apex Alumni Platform",
  description: "Alumni platform for Lang Apex Education Center (Dombit)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.svg"
                    alt="Lang Apex Logo"
                    width={40}
                    height={40}
                    className="mr-2"
                  />
                  <span className="text-xl font-semibold">Lang Apex</span>
                </Link>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="/alumni" className="nav-link">Alumni</Link>
                <Link href="/events" className="nav-link">Events</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-white/90 backdrop-blur-sm mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>  +998953035509</p>
                <p> 7, Navoiy str, Namangan</p>
                <a 
                  href="https://goo.gl/maps/i74P9PC2qJVAKwxn7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  View on Google Maps
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/alumni" className="nav-link">Alumni Directory</Link></li>
                  <li><Link href="/events" className="nav-link">Upcoming Events</Link></li>
                  <li><Link href="/about" className="nav-link">About Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">About Lang Apex</h3>
                <p className="text-gray-600">Established in 2006, Lang Apex Education Center (Dombit) has been helping students Rise to the Top through quality education.</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
              <p>&copy; {new Date().getFullYear()} Lang Apex Education Center. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
