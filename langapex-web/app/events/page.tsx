const upcomingEvents = [
  {
    title: 'Alumni Networking Mixer',
    date: 'April 25, 2025',
    time: '6:00 PM - 8:00 PM',
    location: 'Lang Apex Main Campus',
    description: 'Join us for an evening of networking with fellow alumni and current students. Light refreshments will be served.',
    type: 'Networking'
  },
  {
    title: 'Career Development Workshop',
    date: 'May 10, 2025',
    time: '2:00 PM - 4:00 PM',
    location: 'Online (Zoom)',
    description: 'Learn essential skills for career advancement from industry experts and successful alumni.',
    type: 'Workshop'
  },
  {
    title: 'Annual Alumni Reunion',
    date: 'June 15, 2025',
    time: '12:00 PM - 5:00 PM',
    location: 'Lang Apex Garden',
    description: 'Our biggest event of the year! Reconnect with old friends and make new connections.',
    type: 'Social'
  }
];

const pastEvents = [
  {
    title: 'Tech Talk: Future of AI',
    date: 'March 15, 2025',
    location: 'Online',
    attendees: 150
  },
  {
    title: 'Spring Career Fair',
    date: 'February 28, 2025',
    location: 'Lang Apex Main Hall',
    attendees: 200
  }
];

export default function EventsPage() {
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
                <div className="flex justify-between items-start">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}