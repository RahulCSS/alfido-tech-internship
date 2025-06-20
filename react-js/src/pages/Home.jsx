import React from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  const menu = [
    { label: "Counter", route: "/counter" },
    { label: "TodoList", route: "/todo" },
    { label: "Router", route: "/router" },
    { label: "Weather", route: "/weather" },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col justify-center items-center gap-[1rem] h-[200px] w-[400px]">
            {menu.map((item) => (
          <div
            key={item.label}
            onClick={() => navigate(item.route)}
            className="w-full text-center py-3 rounded border border-transparent hover:border-gray-300 hover:shadow-md transition duration-200 cursor-pointer bg-white text-[1.5rem]"
          >
            {item.label}
          </div>
        ))}
        </div>
    </div>
  )
}

export default Home