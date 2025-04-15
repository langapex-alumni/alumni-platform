const workshops = [
  {
    title: 'IELTS Preparation',
    schedule: 'Monday - Friday',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Sarah Wilson',
    level: 'Intermediate to Advanced',
    description: 'Comprehensive IELTS preparation course covering all four sections: Reading, Writing, Listening, and Speaking.',
    duration: '3 months'
  },
  {
    title: 'Business English',
    schedule: 'Tuesday & Thursday',
    time: '2:00 PM - 4:00 PM',
    instructor: 'David Miller',
    level: 'Upper Intermediate',
    description: 'Learn essential business communication skills, including email writing, presentations, and negotiation.',
    duration: '2 months'
  },
  {
    title: 'Conversational English',
    schedule: 'Monday, Wednesday, Friday',
    time: '5:00 PM - 6:30 PM',
    instructor: 'Emma Thompson',
    level: 'Beginner to Intermediate',
    description: 'Practice speaking English in real-life situations and build confidence in your communication skills.',
    duration: '2 months'
  }
];

export default function WorkshopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Language Workshops
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Enhance your English language skills with our specialized workshops led by experienced instructors.
        </p>
      </div>

      {/* Workshop Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {workshops.map((workshop) => (
          <div
            key={workshop.title}
            className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4">{workshop.title}</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>{workshop.schedule}</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>{workshop.time}</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p>{workshop.instructor}</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <p>{workshop.level}</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>{workshop.duration}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{workshop.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-4">Ready to Improve Your English?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our workshops and take your language skills to the next level. Contact us for registration and more information.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://t.me/LangapexDombitNamangan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0088cc] hover:bg-[#0077b3] gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.712 4.94-4.465c.215-.19-.047-.297-.332-.107L9.65 13.95l-2.66-.83c-.58-.183-.594-.582.124-.86l10.38-4c.504-.184.94.126.77.83z"/>
            </svg>
            Contact Us on Telegram
          </a>
          <a
            href="tel:+998953035509"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}