import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/Home'
// import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
        <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
  </React.StrictMode>,
)