'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/alumni" className="nav-link">Alumni</Link>
              <Link href="/events" className="nav-link">Events</Link>
              <Link href="/workshop" className="nav-link">Workshop</Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-800 focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
        />
      )}

      {/* Sidebar */}
      <div
         className={`fixed top-0 right-0 h-full w-64 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-gray-800">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/alumni" className="nav-link" onClick={() => setIsOpen(false)}>Alumni</Link>
          <Link href="/events" className="nav-link" onClick={() => setIsOpen(false)}>Events</Link>
          <Link href="/workshop" className="nav-link" onClick={() => setIsOpen(false)}>Workshop</Link>
        </nav>
      </div>
    </>
  );
}
