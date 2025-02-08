import { memo } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { PersonalInfo } from '../utils/constants';

// Header component for displaying personal information
const Header = memo(function Header() {
  return (
    <header className="w-full max-w-2xl bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm text-white p-6 rounded-b-lg shadow-lg mb-4 cursor-default">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{PersonalInfo.FullName}</h1>
          <p className="text-gray-300 text-sm font-medium">{PersonalInfo.Education}</p>
        </div>

        <div className="hidden md:flex mt-4 flex-col items-end space-y-1">
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-indigo-500" />
            <span className="text-gray-300 text-sm">{PersonalInfo.Email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-indigo-500" />
            <span className="text-gray-300 text-sm">{PersonalInfo.Location}</span>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
