import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavTab = ({ to, name }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex-grow text-center px-3 py-2 font-medium transition duration-200 hover:bg-gray-700 ${
          isActive ? 'text-white border-b-2 border-blue-500' : 'text-gray-300 hover:text-white'
        }`
      }
    >
      {name}
    </NavLink>
  );
};

NavTab.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavTab;
