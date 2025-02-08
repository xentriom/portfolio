import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import PropTypes from 'prop-types';

// NavTab component for navigation tabs
// Used in conjunction with NavBar component
// This component determines page navigation
const NavTab = ({ to, name }) => {
  return (
    <NavLink to={to} className="flex-grow text-center px-3 py-2 font-medium transition duration-200 hover:bg-gray-700">
      {({ isActive }) => (
        <div className="relative">
          <span className={`block ${isActive ? 'text-gray-200' : 'text-gray-400 hover:text-gray-200'}`}>{name}</span>
          {isActive && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 h-1 bg-indigo-400 rounded-b-sm"
              style={{ bottom: -8 }}
            />
          )}
        </div>
      )}
    </NavLink>
  );
};

NavTab.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavTab;
