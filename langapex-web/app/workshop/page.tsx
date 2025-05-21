  const resources = [
  {
    title: 'IELTS Resources',
    items: [
      'Official Cambridge IELTS Practice Materials',
      'IELTS Writing Task Templates',
      'Speaking Practice Guides',
      'Listening Practice Tests',
      'Reading Strategies Guide'
    ],
    description: 'Comprehensive resources to help you prepare for all sections of the IELTS exam.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'SAT Resources',
    items: [
      'Official College Board SAT Practice Tests',
      'Math Formula Sheet and Practice',
      'Evidence-Based Reading Guides',
      'Writing and Language Tips',
      'Essay Writing Templates'
    ],
    description: 'Essential materials and practice tests to help you achieve your target SAT score.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    title: 'College Application Resources',
    items: [
      'Common App Essay Guidelines',
      'College Research Worksheet',
      'Application Timeline Planner',
      'Recommendation Letter Tips',
      'Financial Aid Guide'
    ],
    description: 'Comprehensive guides and templates to help you navigate the college application process.',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
  }
];

export default function WorkshopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Educational Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Access our curated collection of study materials and guides for IELTS, SAT, and college applications.
        </p>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={resource.icon} />
              </svg>
              <h3 className="text-xl font-semibold">{resource.title}</h3>
            </div>
            <ul className="space-y-2 mb-4">
              {resource.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <svg className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600">{resource.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-4">Need Help with Your Studies?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us for personalized guidance on IELTS preparation, SAT training, or college applications. Our experienced team is here to help you succeed.
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