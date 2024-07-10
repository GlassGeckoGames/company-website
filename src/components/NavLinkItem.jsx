import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'bg-primary text-secondary rounded-3xl px-4 py-2 transition-all duration-300'
          : 'hover:text-accent px-4 py-2 transition-all duration-300'
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLinkItem;
