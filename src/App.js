import CanvaClone from './components/CanvaClone/CanvaClone';
import LandingPage from './Pages/LandingPage'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import './App.css';

// Create a wrapper component that uses useLocation
function AppContent() {
  const location = useLocation();
  const isCanvasPage = location.pathname === '/canvas';

  return (
    <div className={`App ${isCanvasPage ? 'canvas-page' : ''}`}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/canvas" element={<CanvaClone />} />
      </Routes>
    </div>
  );
}

// Main App component
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
