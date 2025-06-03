import React from 'react'
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router';

const RouterApp = () => {
  const navigate = useNavigate();
  const routermenu = [
    { label: "Home", route: "home" },
    { label: "About", route: "about" },
    { label: "Contact", route: "contact" },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <div className="flex justify-center items-center gap-[1rem] h-[200px] w-[400px]">
            {routermenu.map((item) => (
          <div
            key={item.label}
            onClick={() => navigate(`/router/${item.route}`)}
            className="w-full text-center py-3 rounded border border-transparent hover:border-gray-300 hover:shadow-md transition duration-200 cursor-pointer bg-white text-[1.5rem]"
          >
            {item.label}
          </div>
        ))}
        </div>

        <div className="px-4 text-center">
        <Outlet />
        </div>
        
    </div>
  )
}

export default RouterApp