// import { useState } from 'react'
// import './src/shared/styles/App.css'

import { Header } from "./features/layout/components/Header"
import { Content } from "./features/layout/components/Content"
import { Footer } from "./features/layout/components/Footer"
import Props from "./features/layout/components/Props"

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/props" element={<Props />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
