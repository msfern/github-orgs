import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Organization from './pages/Organization';

import './global.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Organization />} />
        <Route path="/:organization" element={<Organization />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
