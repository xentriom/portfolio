import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItems } from '../utils/constants';

const NavBar = memo(function NavBar() {
  return (
    <nav className="w-full max-w-2xl flex space-x-4">
      {NavItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `px-3 py-2 text-sm font-medium transition duration-200 ${
              isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
});

export default NavBar;
