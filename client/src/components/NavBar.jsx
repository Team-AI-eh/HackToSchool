import { Outlet, Link } from 'react-router-dom';
import React from 'react';

export default function NavBar() {
  return (
    <div style={{ height: '50px', background: 'grey' }}>
      <Link to="/Timer">Timer</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Analytics">Analytics</Link>
      <Outlet />
    </div>
  );
}
