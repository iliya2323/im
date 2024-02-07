import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider } from 'react-router-dom';
import router from './App.jsx';
import AppRouter from './App.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <Router>
     <AppRouter/>
      </Router>
  </React.StrictMode>
);
