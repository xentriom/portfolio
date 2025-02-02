import { memo } from 'react';
import { PersonalInfo } from '../utils/constants';

const Header = memo(function Header() {
  return (
    <header className="w-full max-w-2xl bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-b-lg shadow-lg mb-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{PersonalInfo.FullName}</h1>
          <p className="text-gray-300 font-medium">{PersonalInfo.Education}</p>
        </div>

        <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end space-y-1">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-300">{PersonalInfo.Email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-300">{PersonalInfo.Location}</span>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
