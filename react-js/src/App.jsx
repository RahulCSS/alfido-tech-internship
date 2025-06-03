import React from 'react'
import { Routes, Route } from "react-router";
import Counter from './pages/counterApp/Counter';
import Home from './pages/Home';
import TodoList from './pages/TodoApp/TodoList';
import Landing from './pages/routerApp/Landing';
import About from './pages/routerApp/About';
import Contact from './pages/routerApp/Contact';
import WeatherAPI from './pages/weatherApp/WeatherAPI';
import RouterApp from './pages/routerApp/RouterApp';

const App = () => {
  return (
    <div className ="box-border m-[0px] p-[0px] h-screen">
      <Routes>
        <Route index element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="todo" element={<TodoList />} />
        <Route path="router" element={<RouterApp />} >
          <Route path="home" element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route >
        <Route path="weather" element={<WeatherAPI />} />
      </Routes>
    </div>
  )
}

export default App