// index.js or App.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './Store/store';

const rootElement = document.getElementById('root');

const createRoot = () => {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>
  );
};

// For React 18
if (rootElement.createReactRoot) {
  rootElement.createReactRoot();
  createRoot();
} else {
  createRoot();
}