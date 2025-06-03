import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import About from './pages/About/About';
import Activities from './pages/Activities/Activities';
import Profile from './pages/Profile/Profile';
import LoginStrava from './pages/Auth/auth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/auth" element={<LoginStrava />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
