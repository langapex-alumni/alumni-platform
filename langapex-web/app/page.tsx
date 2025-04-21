import Image from "next/image";
import Link from "next/link";
import { CompanyCarousel } from "./components/CompanyCarousel";
import { UniversityCarousel } from "./components/UniversityCarousel";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 leading-tight">
          Welcome to{" "}
          <span className="whitespace-nowrap bg-gradient-to-l from-[#ffe17f] to-[#fce390] bg-clip-text text-transparent">
            Lang Apex
          </span>{" "}
          Alumni Network{" "}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Connecting generations of Lang Apex graduates, fostering lifelong
          relationships, and celebrating our shared success stories.
        </p>
      </div>

      {/* Featured Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Alumni Directory */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Alumni Directory</h2>
          <p className="text-gray-600 mb-4">
            Connect with fellow graduates and expand your professional network.
          </p>
          <Link
            href="/alumni"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Browse Directory →
          </Link>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <p className="text-gray-600 mb-4">
            Stay connected with alumni events, reunions, and networking
            opportunities.
          </p>
          <Link
            href="/events"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            View Events →
          </Link>
        </div>

        {/* Success Stories */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
          <p className="text-gray-600 mb-4">
            Get inspired by the achievements of our distinguished alumni.
          </p>
          <Link
            href="/stories"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Read Stories →
          </Link>
        </div>
      </div>

      {/* University Carousel */}
      <UniversityCarousel />

      {/* Company Carousel */}
      <CompanyCarousel />

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with our vibrant community on Telegram and stay updated with
          our latest content on YouTube.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://t.me/+AnJ8z-uGPp0wOGZi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0088cc] hover:bg-[#0077b3] gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.712 4.94-4.465c.215-.19-.047-.297-.332-.107L9.65 13.95l-2.66-.83c-.58-.183-.594-.582.124-.86l10.38-4c.504-.184.94.126.77.83z" />
            </svg>
            Join Alumni Community
          </a>
          <a
            href="https://t.me/LangapexDombitNamangan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0088cc] hover:bg-[#0077b3] gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.712 4.94-4.465c.215-.19-.047-.297-.332-.107L9.65 13.95l-2.66-.83c-.58-.183-.594-.582.124-.86l10.38-4c.504-.184.94.126.77.83z" />
            </svg>
            Official Channel
          </a>
          <a
            href="https://www.youtube.com/@LangApexDombit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF0000] hover:bg-[#CC0000] gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube Channel
          </a>
        </div>
      </div>
    </div>
  );
}
