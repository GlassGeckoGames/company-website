import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'bg-primary text-secondary rounded px-4 py-2'
          : 'hover:text-accent px-4 py-2'
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLinkItem;
