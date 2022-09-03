import React, { lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './NavBar';

// import Timer from './timer/timer';
// import Profile from './profile/profile';
// import Analytics from './analytics/analytics';
// import Login from './login/login';

const Timer = lazy(() => import('./timer/timer'));
const Analytics = lazy(() => import('./analytics/analytics'));
const Profile = lazy(() => import('./profile/profile'));
export default function App() {
  return (
    <div>
      <NavBar />
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Timer" element={<Timer />} />
        </Routes>
      </React.Suspense>
      <Outlet />
    </div>
  );
}
