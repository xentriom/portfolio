import { memo } from 'react';
import { NavItems } from '../utils/constants';
import NavTab from './NavTab';

const NavBar = memo(function NavBar() {
  return (
    <nav className="w-full max-w-2xl flex rounded-t-lg bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm">
      {NavItems.map((item) => (
        <NavTab key={item.href} to={item.href} name={item.name} />
      ))}
    </nav>
  );
});

export default NavBar;
