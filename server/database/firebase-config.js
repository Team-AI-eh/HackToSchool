// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getAnalytics } = require('firebase/analytics');
const { getAuth } = require('firebase/auth');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCn5821J4pCEhkkYNDdtMlBW2gwD8w73zg',
  authDomain: 'team-andy.firebaseapp.com',
  databaseURL: 'https://team-andy-default-rtdb.firebaseio.com',
  projectId: 'team-andy',
  storageBucket: 'team-andy.appspot.com',
  messagingSenderId: '197703838954',
  appId: '1:197703838954:web:a40ec430bc3913f4d7bb93',
  measurementId: 'G-JFBD00BQQH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig);
// const analytics = getAnalytics(app);

module.exports = {
  firebase: app,
  auth,
};
