import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>+998953035509</p>
            <p>7, Navoiy str, Namangan</p>
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
            <h3 className="text-lg font-semibold mb-4">About Lang Apex</h3>
            <p className="text-gray-600">Established in 2006, Lang Apex Education Center (Dombit) has been helping students Rise to the Top through quality education.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Lang Apex Education Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
