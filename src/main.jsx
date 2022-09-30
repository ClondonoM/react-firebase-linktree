import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  LoginView,
  Dashboard,
  EditProfileView,
  SignOutView,
  PublicProfileView,
  ChooseUsernameView,
} from './routes';

import './styles/normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='login' element={<LoginView />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='dashboard/profile' element={<EditProfileView />} />
      <Route path='signout' element={<SignOutView />} />
      <Route path='u/:username' element={<PublicProfileView />} />
      <Route path='choose-username' element={<ChooseUsernameView />} />
    </Routes>
  </BrowserRouter>
);
