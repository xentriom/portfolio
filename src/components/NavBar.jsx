import { memo } from 'react';
import { NavItems } from '../utils/constants';
import NavTab from './NavTab';

// NavBar component for navigation tabs
// Used in conjunction with NavTab component
const NavBar = memo(function NavBar() {
  return (
    <nav className="w-full max-w-2xl flex glassmorph-gradient rounded-t-lg">
      {NavItems.map((item) => (
        <NavTab key={item.href} to={item.href} name={item.name} />
      ))}
    </nav>
  );
});

export default NavBar;
