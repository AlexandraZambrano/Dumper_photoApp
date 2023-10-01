import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import ApiProvider from './context/ApiProvider.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import AuthProvider from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthProvider>
      <ApiProvider>
        <Navbar />
        <App />
      </ApiProvider>
    </AuthProvider>
    </BrowserRouter>
)
