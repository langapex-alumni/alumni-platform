import { 
  FaGoogle, 
  FaAmazon, 
  FaSalesforce, 
  FaSnapchat, 
  FaMicrosoft, 
  FaFacebook 
} from 'react-icons/fa';

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
    name: 'Salesforce',
    Icon: FaSalesforce,
    color: '#00A1E0'
  },
  {
    name: 'Snap',
    Icon: FaSnapchat,
    color: '#FFFC00'
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
  }
];

export function CompanyCarousel() {
  return (
    <div className="w-full py-6 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-medium text-center mb-6 text-gray-600">
          Our Alumni Work At
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {companies.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="flex flex-col items-center p-3 rounded-lg transition-transform hover:scale-105"
              style={{ background: `${color}08` }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <Icon className="w-8 h-8" style={{ color }} />
              </div>
              <p className="text-sm font-medium text-gray-600">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
