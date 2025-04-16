'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { 
  FaGoogle, 
  FaAmazon, 
  FaSalesforce, 
  FaMicrosoft, 
  FaFacebook,
  FaUber,
  FaSpotify,
  FaBuilding,
  FaIndustry
} from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const companies = [
  {
    name: 'Google',
    Icon: FaGoogle,
    color: '#4285F4'
  },
  {
    name: 'Amazon',
    Icon: FaAmazon,
    color: '#FF9900'
  },
  {
    name: 'TCS Japan',
    Icon: FaIndustry,
    color: '#0033A0'
  },
  {
    name: 'Salesforce',
    Icon: FaSalesforce,
    color: '#00A1E0'
  },
  {
    name: 'Michael Page',
    Icon: FaBuilding,
    color: '#E01021'
  },
  {
    name: 'Microsoft',
    Icon: FaMicrosoft,
    color: '#00A4EF'
  },
  {
    name: 'Meta',
    Icon: FaFacebook,
    color: '#0668E1'
  },
  {
    name: 'Yanmar',
    Icon: FaIndustry,
    color: '#DA1F3D'
  },
  {
    name: 'IBM',
    Icon: FaBuilding,
    color: '#1F70C1'
  },
  {
    name: 'Computer Futures',
    Icon: FaBuilding,
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
    <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-8 mb-16">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Our Alumni Work at Leading Tech Companies
      </h2>
      <div className="relative overflow-hidden">
        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12"
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
                  className="w-48 h-24 relative rounded-lg shadow-sm overflow-hidden transition-transform group-hover:scale-105 flex items-center justify-center"
                  style={{ background: `${company.color}08` }}
                >
                  <company.Icon 
                    className="w-12 h-12 transition-transform group-hover:scale-110" 
                    style={{ color: company.color }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">
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
