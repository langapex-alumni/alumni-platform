"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; 

const images = [
  {
    date: "April 25, 2025",
    comment: "From BCC 2022",
    img: "/images/galleryWall/gallery-img1.jpeg",
  },
  {
    date: "April 25, 2025",
    comment: "Shining Stars",
    img: "/images/galleryWall/gallery-img2.jpeg",
  },
  {
    date: "April 25, 2025",
    comment: "From BCC 2024",
    img: "/images/galleryWall/gallery-img3.jpeg",
  },
];

const GalleryWall = () => {
  const [index, setIndex] = useState(-1); 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-8 mb-8 text-center">
        Feel the Nostalgic Vibe
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 text-center mb-8"> Let us take you back to the days of Lang Apex</p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg shadow-lg hover:scale-[1.02] transition-transform break-inside-avoid cursor-pointer"
            onClick={() => setIndex(idx)} 
          >
            <Image
              src={image.img}
              alt={image.comment}
              width={600}
              height={800}
              className="w-full h-auto object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={idx === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/70 p-3">
              <p className="text-sm font-semibold">{image.comment}</p>
              <p className="text-xs text-gray-500">{image.date}</p>
            </div>
          </div>
        ))}
      </div>
        
      <div className="mt-[150px]">
        <h2 className="text-center text-[28px] font-semibold ">Got some pictures? Share with us <a href="#" className="underline text-blue-600">here</a></h2>
      </div>

      {/* Lightbox component */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((img) => ({ src: img.img }))}
      />
    </div>
  );
};

export default GalleryWall;
