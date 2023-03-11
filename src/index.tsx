// react
import React from 'react'
import ReactDOM from 'react-dom/client'
// react-router-dom
import { HashRouter, Routes, Route } from 'react-router-dom'
// style
import './style/index.css'
// components
import Header from "./components/Header"
import Footer from "./components/Footer"
// pages
import Home from './pages/Home'
import Events from './pages/Events'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Header />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </HashRouter>
    <Footer />
  </React.StrictMode>
)