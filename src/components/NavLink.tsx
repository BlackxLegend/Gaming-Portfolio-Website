import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  current: string;
}

export const NavLink = ({ to, children, current }: NavLinkProps) => (
  <Link
    to={to}
    className={`text-white hover:text-purple-400 transition-colors ${
      current === to ? 'border-b-2 border-purple-500' : ''
    }`}
  >
    {children}
  </Link>
);