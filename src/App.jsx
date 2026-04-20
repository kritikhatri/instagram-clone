import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Reels from './pages/Reels';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="reels" element={<Reels />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
