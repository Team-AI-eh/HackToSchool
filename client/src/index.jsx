import { createRoot } from 'react-dom/client';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './components/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="*"
        element={<App />}
      />
    </Routes>
  </BrowserRouter>,
);
