import React, { useState, useEffect } from "react";
import {
  CircleIcon,
  CheckCircledIcon,
  TrashIcon,
} from "@radix-ui/react-icons";

const TodoList = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (taskInput.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTask();
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        className="p-2 border rounded w-full max-w-md mb-4"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <ul className="w-full max-w-md">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow"
          >
            <div
              className={`flex items-center gap-2 cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? (
                <CheckCircledIcon className="text-green-600 w-5 h-5" />
              ) : (
                <CircleIcon className="text-gray-400 w-5 h-5" />
              )}
              {task.text}
            </div>
            <TrashIcon
              className="text-red-500 w-5 h-5 cursor-pointer"
              onClick={() => deleteTask(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
