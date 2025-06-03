import React from 'react'
import { Routes, Route } from "react-router";
import Counter from './pages/Counter';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Landing from './pages/routerPages/Landing';
import About from './pages/routerPages/About';
import Contact from './pages/routerPages/Contact';
import WeatherAPI from './pages/WeatherAPI';

const App = () => {
  return (
    <div className ="box-border m-[0px] p-[0px] h-screen">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tasks" element={<TodoList />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<WeatherAPI />} />
      </Routes>
    </div>
  )
}

export default App