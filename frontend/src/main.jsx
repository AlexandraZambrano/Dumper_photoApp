import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import ApiProvider from './context/ApiProvider.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ApiProvider>
        <Navbar />
        <App />
      </ApiProvider>
    </BrowserRouter>
)
