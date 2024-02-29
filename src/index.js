import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './store/auth-context';

const rootElement = document.getElementById('root');

// Use createRoot from "react-dom"
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
