import React from 'react';
import { NavLink } from 'react-router-dom';


 const NavLinkItem = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? 'bg-primary text-secondary rounded-3xl' : 
        'hover:text-accent bg-none duration-300'
        } 
        px-4 py-2 transition-all `
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkItem;
