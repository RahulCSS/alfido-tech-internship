import React from 'react'
import { Routes, Route } from "react-router";
import Counter from './pages/Counter';
import Home from './pages/Home';

const App = () => {
  return (
    <div class ="box-border m-[0px] p-[0px] h-screen">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  )
}

export default App