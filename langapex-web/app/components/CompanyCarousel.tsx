'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { 
  FaGoogle, 
  FaAmazon, 
  FaSalesforce, 
  FaMicrosoft, 
  FaFacebook,
  FaBuilding,
  FaIndustry
} from 'react-icons/fa';

import { useEffect, useRef } from 'react';

import Image from 'next/image';
import { IconType } from 'react-icons';

interface Company {
  name: string;
  icon?: IconType;
  image?: string;
  color: string;
}

const companies: Company[] = [
  {
    name: 'Google',
    icon: FaGoogle,
    color: '#4285F4'
  },
  {
    name: 'Amazon',
    icon: FaAmazon,
    color: '#FF9900'
  },
  {
    name: 'TCS Japan',
    icon: FaIndustry,
    color: '#0033A0'
  },
  {
    name: 'Salesforce',
    icon: FaSalesforce,
    color: '#00A1E0'
  },
  {
    name: 'Michael Page',
    image: '/images/companies/m-page.jpg',
    color: '#E01021'
  },
  {
    name: 'Microsoft',
    icon: FaMicrosoft,
    color: '#00A4EF'
  },
  {
    name: 'Meta',
    icon: FaFacebook,
    color: '#0668E1'
  },
  {
    name: 'Yanmar',
    icon: FaIndustry,
    color: '#DA1F3D'
  },
  {
    name: 'IBM',
    image: '/images/companies/ibm.png',
    color: '#1F70C1'
  },
  {
    name: 'Computer Futures',
    icon: FaBuilding,
    color: '#003DA5'
  }
];

export function CompanyCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!containerRef.current) return;
    
    const scrollWidth = containerRef.current.scrollWidth;
    const viewportWidth = containerRef.current.offsetWidth;
    
    const animate = async () => {
      await controls.start({
        x: [-scrollWidth / 2, 0],
        transition: {
          duration: 70,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };
    
    animate();
  }, [controls]);

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-4 sm:p-8 mb-8 sm:mb-16">
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-8">
        Our Alumni Work at Leading Tech Companies
      </h2>
      <div className="relative overflow-hidden">
        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            className="flex space-x-6 sm:space-x-12"
            animate={controls}
            style={{
              width: "fit-content",
            }}
          >
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-none group"
              >
                <div 
                  className="w-32 h-16 sm:w-48 sm:h-24 relative rounded-lg shadow-sm overflow-hidden transition-transform group-hover:scale-105 flex items-center justify-center"
                  style={{ background: `${company.color}08` }}
                >
                  {company.icon ? (
                    <company.icon 
                      className="w-8 h-8 sm:w-12 sm:h-12 transition-transform group-hover:scale-110" 
                      style={{ color: company.color }}
                    />
                  ) : company.image ? (
                    <Image
                      src={company.image}
                      alt={company.name}
                      width={48}
                      height={48}
                      className="w-8 h-8 sm:w-12 sm:h-12 transition-transform group-hover:scale-110 object-contain"
                    />
                  ) : null}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center">
                  {company.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
