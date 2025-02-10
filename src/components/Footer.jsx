import { memo } from 'react';
import { PersonalInfo } from '../utils/constants';

// Footer component for the footer section
const Footer = memo(function Footer() {
  return (
    <footer className="w-full max-w-2xl bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-xs rounded-t-lg cursor-default">
      <div className="p-4 text-center text-gray-200 text-xs">
        &copy; {new Date().getFullYear()} {PersonalInfo.FullName}. All rights reserved.
      </div>
    </footer>
  );
});

export default Footer;
