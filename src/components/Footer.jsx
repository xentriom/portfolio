import { memo } from 'react';
import { PersonalInfo } from '../utils/constants';

const Footer = memo(function Footer() {
  return (
    <footer className="w-full max-w-2xl bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm rounded-t-lg">
      <div className="p-4 text-center text-white">
        &copy; {new Date().getFullYear()} {PersonalInfo.FullName}
      </div>
    </footer>
  );
});

export default Footer;
