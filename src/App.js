import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
} from '@clerk/clerk-react';
import CanvaClone from './components/CanvaClone/CanvaClone';
import LandingPage from './Pages/LandingPage';
import './App.css';

// Wrapper for Protected Routes
function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const isCanvasPage = location.pathname === '/canvas'; // Optional, for styling or other logic.

  return (
    <div className={`App ${isCanvasPage ? 'canvas-page' : ''}`}>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Sign In Page */}
        <Route path="/sign-in" element={<SignIn redirectUrl="/canvas" />} />

        {/* Sign Up Page */}
        <Route path="/sign-up" element={<SignUp redirectUrl="/canvas" />} />

        {/* Canvas (Protected Route) */}
        <Route
          path="/canvas"
          element={
            <ProtectedRoute>
              <CanvaClone />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
