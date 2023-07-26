import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home';
import Timer from './pages/Timer/Timer';
import App from './App'
import { Route, BrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
