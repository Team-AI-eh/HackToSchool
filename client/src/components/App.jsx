import React, { useState, useEffect, lazy } from 'react';
import axios from 'axios';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
// import auth from '../../../server/database/firebase-config';
// import Timer from './timer/timer';
// import Profile from './profile/profile';
// import Analytics from './analytics/analytics';
import Login from './login/login';
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
  // const [authentication, needsAuth] = useState(false);
  // const [current, setCurrent] = useState('');
  // const [profile, setProfile] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   classes: [],
  // });
  // const [login, setLogin] = useState({
  //   email: '',
  //   password: '',
  // });
  // const getUserData = (user) => {
  //   axios
  //     .get('/user', { params: { email: user } })
  //     .then((r) => {
  //       setProfile(r.data[0]);
  //     })
  //     .then(() => {
  //       console.log('upon mount', profile);
  //       needsAuth(false);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     setCurrent(currentUser);
  //     console.log(currentUser);
  //   });
  //   current?.email ? getUserData(current?.email) : needsAuth(true);
  // }, [current]);
  // const registerUser = async (e) => {
  //   e.preventDefault();
  //   setProfile((prevValues) => ({
  //     ...prevValues,
  //   }));
  //   try {
  //     const createdUser = await createUserWithEmailAndPassword(
  //       auth,
  //       profile.email,
  //       profile.password
  //     );
  //     const addDb = await axios.post('/register', {
  //       email: profile.email,
  //       firstName: profile.firstName,
  //       lastName: profile.lastName,
  //       classes: profile.classes,
  //       password: profile.password,
  //     });
  //     needsAuth(false);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // const loginUser = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       login.email,
  //       login.password,
  //     );
  //     setLogin({
  //       email: '',
  //       password: '',
  //     });
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // const logoutUser = async () => {
  //   try {
  //     await signOut(auth);
  //     needsAuth(true);
  //     setProfile({
  //       firstName: '',
  //       lastName: '',
  //       email: '',
  //       password: '',
  //       classes: [],
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const handleRegInput = (e) => {
  //   const { name, value } = e.target;
  //   setProfile((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };
  // const handleLogInput = (e) => {
  //   const { name, value } = e.target;
  //   setLogin((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };
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
