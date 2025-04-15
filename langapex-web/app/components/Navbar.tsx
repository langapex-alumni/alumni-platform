import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
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
            <Link href="/workshop" className="nav-link">Workshop</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
