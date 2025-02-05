import { memo } from 'react';
import { motion } from 'motion/react';
import { NavItems } from '../utils/constants';
import NavTab from './NavTab';

// NavBar component for navigation tabs
// Used in conjunction with NavTab component
const NavBar = memo(function NavBar() {
  return (
    <motion.nav
      className="w-full max-w-2xl flex rounded-t-lg bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {NavItems.map((item) => (
        <NavTab key={item.href} to={item.href} name={item.name} />
      ))}
    </motion.nav>
  );
});

export default NavBar;
