"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Event {
  title: string;
  date: string;
  location: string;
  attendees?: number;
  type: string;
  time?: string;
  description?: string;
  images?: string[];
}

const upcomingEvents: Event[] = [
  {
    title: 'Alumnus Interview',
    date: 'Coming Soon',
    time: 'Evening, UZT',
    location: 'Online',
    type: 'Interview',
    description: 'An exclusive interview with an alum!'
  }
];

const pastEvents = [
  {
    title: 'Soccer Match in Namangan',
    date: 'June, 2025',
    location: 'Namangan Stadium',
    attendees: 25,
    type: 'Sports',
    images: [
      '/images/events/1a.jpg',
      '/images/events/1b.jpg',
      '/images/events/1c.jpg',
      '/images/events/1d.jpg'
    ]
  }
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(-1);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Alumni Events
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay connected with the Lang Apex community through our regular events and gatherings.
        </p>
      </div>

      {/* Upcoming Events */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full text-blue-700 bg-blue-100">
                  {event.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p>{event.date}</p>
                <p>{event.time}</p>
                <p>{event.location}</p>
              </div>
              <p className="text-gray-600">{event.description}</p>
              {event.type === 'Sports' && (
                <a
                  href="https://t.me/dombitsports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Join Telegram Group
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">Past Events</h2>
        <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            {pastEvents.map((event) => (
              <div key={event.title} className="p-6 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium">{event.title}</h3>
                    <div className="mt-1 text-gray-600">
                      <p>{event.date} • {event.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {event.attendees} Attendees
                    </span>
                  </div>
                </div>
                {event.images && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                    {event.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => {
                          setSelectedEvent(pastEvents.indexOf(event));
                          setImageIndex(idx);
                        }}
                      >
                        <Image
                          src={img}
                          alt={`${event.title} image ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedEvent !== null && (
        <Lightbox
          open={imageIndex >= 0}
          close={() => setImageIndex(-1)}
          index={imageIndex}
          slides={pastEvents[selectedEvent].images?.map(img => ({ src: img })) || []}
        />
      )}
    </div>
  );
}