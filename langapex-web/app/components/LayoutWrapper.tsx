import { GoogleAnalytics } from '@next/third-parties/google';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <GoogleAnalytics gaId="G-1XEF2LHZ47" />
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
