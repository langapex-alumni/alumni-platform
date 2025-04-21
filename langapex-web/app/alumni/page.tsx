import { Divider } from '@heroui/react';
import { img } from 'framer-motion/client';
import Image from 'next/image';

const alumni = [
  {
    name: 'Sherali Obidov',
    img: 'https://media.licdn.com/dms/image/v2/D5603AQHDaJiqijS7LA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706156902327?e=2147483647&v=beta&t=BoMeqIzVNamcTMUHAJFvLR6pCDPiacya-6YU3qlab4c',
    year: 2012,
    company: 'Google',
    role: 'Software Engineer',
    quote: 'Lang Apex gave me the foundation I needed to succeed in tech.',
    linkedin: 'https://www.linkedin.com/in/sheraliobidov/',
    email: 'wQ2Og@example.com'
  },
  {
    name: 'Jahongir Rahmonov',
    img: 'https://rahmonov.me/static/images/me.jpg',
    year: 2012,
    company: 'Amazon',
    role: 'Software Engineer',
    quote: 'The skills I learned at Lang Apex has invaluable value in my career.',
    linkedin: 'https://www.linkedin.com/in/jahongirrahmonov/',
    email: 'O9d8o@example.com'
  },
  {
    name: 'Jamshid Mirzakhalov',
    img: 'https://media.licdn.com/dms/image/v2/D4E03AQF172HsvX-fBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679259906625?e=2147483647&v=beta&t=rRX2mZFvk_BbPOAc2db8fQ2QynPeZaCdPhpE269iDjk',
    year: 2014,
    company: 'Study Space',
    role: 'CEO',
    quote: 'Lang Apex opened doors to amazing opportunities.',
    linkedin: 'https://www.linkedin.com/in/mirzakhalov/',
    email: 'O9d8o@example.com'

  },
  {
    name: 'Farrux Habibullayev',
    year: 2012,
    img: 'https://media.licdn.com/dms/image/v2/D5603AQHCym6QKsrnKg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668357150066?e=2147483647&v=beta&t=02y1cwCWcr8Vpb6wfc4sFhoneoXgaedKGA2e_QQF0L0',
    company: 'Google',
    role: 'Software Engineer',
    quote: 'My journey in tech started at Lang Apex.',
    linkedin: 'https://www.linkedin.com/in/farruhh/',
    email: 'O9d8o@example.com'
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
            <div className="w-16 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              {
                person.img ? (
                  <img 
                    src={person.img} 
                    alt={person.name} 
                    className="w-16 h-12 sm:w-16 sm:h-16 rounded-full object-cover" 
                  />
                ) : (
                  <span className="text-xl sm:text-2xl font-semibold">{person.name.charAt(0)}</span>
                )
              }
            </div>

              <div>
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-gray-600">Class of {person.year}</p>
                <p className="text-blue-600 font-medium">{person.role} at {person.company}</p>
                <p className="mt-2 text-gray-600 italic">"{person.quote}"</p>
              </div>
              
            </div>
            <div className='flex items-center justify-between mt-4 border-t border-gray-200'>
              <span className='text-center block pt-3'>Contacts:</span>
              <div className='flex items-center justify-center gap-4 pt-3'>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                <a href={`mailto:${person.email}`} className="text-[crimson] hover:underline">Gmail</a>
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