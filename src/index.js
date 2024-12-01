import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated for React 18
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
import './index.css';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>Something went wrong!</h1>
          <p>We are working to fix this issue. Please try refreshing the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Retrieve the Clerk frontend API key from environment variables
const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  console.error("Error: Missing Clerk publishable key. Please set REACT_APP_CLERK_PUBLISHABLE_KEY in your .env file.");
}

const container = document.getElementById('root');
const root = createRoot(container); // React 18 API

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ClerkProvider publishableKey={publishableKey}>
        <App />
      </ClerkProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
