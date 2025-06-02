import React from 'react'
import { Routes, Route } from "react-router";
import Counter from './pages/Counter';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Counter />} />
      </Routes>
    </div>
  )
}

export default App