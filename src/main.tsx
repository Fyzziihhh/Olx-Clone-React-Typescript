// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: Import your global styles
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseContextProvider } from './Store/FirebaseContext';
import AuthContexProvider from './Store/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>

 
      <FirebaseContextProvider>
    <AuthContexProvider>
        <App />
      </AuthContexProvider>  
      </FirebaseContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
