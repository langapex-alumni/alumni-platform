import Image from 'next/image';

const alumni = [
  {
    name: 'John Smith',
    year: 2020,
    company: 'Google',
    role: 'Software Engineer',
    quote: 'Lang Apex gave me the foundation I needed to succeed in tech.'
  },
  {
    name: 'Sarah Johnson',
    year: 2019,
    company: 'Microsoft',
    role: 'Product Manager',
    quote: 'The skills I learned at Lang Apex were invaluable.'
  },
  {
    name: 'Michael Chen',
    year: 2021,
    company: 'Amazon',
    role: 'Data Scientist',
    quote: 'Lang Apex opened doors to amazing opportunities.'
  },
  {
    name: 'Emily Brown',
    year: 2018,
    company: 'Apple',
    role: 'UX Designer',
    quote: 'My journey in tech started at Lang Apex.'
  }
];

export default function AlumniPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Our Alumni Network
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Meet the incredible graduates who have gone on to achieve great success in their careers.
        </p>
      </div>

      {/* Alumni Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {alumni.map((person) => (
          <div 
            key={person.name}
            className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-600">
                  {person.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-gray-600">Class of {person.year}</p>
                <p className="text-blue-600 font-medium">{person.role} at {person.company}</p>
                <p className="mt-2 text-gray-600 italic">"{person.quote}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-gray-600">Active Alumni</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">30+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">85%</div>
            <div className="text-gray-600">Employment Rate</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Are You a Lang Apex Graduate?</h2>
        <p className="text-gray-600 mb-8">
          Join our alumni network to stay connected and access exclusive opportunities.
        </p>
        <a
          href="https://t.me/+AnJ8z-uGPp0wOGZi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0088cc] hover:bg-[#0077b3] gap-2"
        >
          Join Our Community
        </a>
      </div>
    </div>
  );
}