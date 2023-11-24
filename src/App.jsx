import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './routes/PrivateRoutes';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import './App.css';

const App = () => {
  return (
    <div className="godpartical">
      <MemoryRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} exact />
          </Route>
          <Route path="/login" element={<>Login</>} exact />
        </Routes>
      </MemoryRouter>
    </div>
  );
};

export default App;
