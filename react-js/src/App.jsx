import React from 'react'
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<App />} />
      </Routes>
    </div>
  )
}

export default App