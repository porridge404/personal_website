import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Enhanced error boundary for debugging
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error?: Error}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('Error caught by boundary:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error details:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          color: 'white', 
          padding: '20px', 
          backgroundColor: '#1e293b',
          minHeight: '100vh',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h1>Something went wrong</h1>
          <p>Error: {this.state.error?.message}</p>
          <p>Check the browser console for more details.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#22c55e',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Add debugging logs
console.log('Main.tsx is loading...');
console.log('React version:', React.version);

const rootElement = document.getElementById('root');
console.log('Root element found:', !!rootElement);

if (!rootElement) {
  console.error('Root element not found - this will cause a blank page');
  document.body.innerHTML = `
    <div style="color: white; padding: 20px; background: #1e293b; font-family: Arial;">
      <h1>Error: Root element not found</h1>
      <p>The element with id="root" was not found in the HTML.</p>
    </div>
  `;
} else {
  try {
    console.log('Creating React root...');
    const root = createRoot(rootElement);
    console.log('Rendering App...');
    root.render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>
    );
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Error during rendering:', error);
    rootElement.innerHTML = `
      <div style="color: white; padding: 20px; background: #1e293b; font-family: Arial;">
        <h1>Rendering Error</h1>
        <p>Error: ${error}</p>
      </div>
    `;
  }
}