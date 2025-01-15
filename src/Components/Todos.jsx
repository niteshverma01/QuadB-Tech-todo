import React, { useContext, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuRepeat } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { GlobalContext } from "../Context/GlobalState";

const Todos = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [newTask, setNewTask] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      task: newTask,
      completed: false,
      important: false,
      date: selectedDate ? selectedDate.toLocaleDateString() : "No Date",
    };

    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTask("");
    setSelectedDate(null); 
  };

  const toggleComplete = (id) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  const removeCompletedTask = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const toggleImportant = (id) => {
  dispatch({ type: "TOGGLE_IMPORTANT", payload: id });
  };

  return (
    <div className="p-6 w-full  mt-10">
      {/* Add Task Section */}
      <div className="bg-gradient-to-t from-[#3579371A] to-[#D0FFD21A] p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Add A Task</h2>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Write your task here"
            className="w-full p-2 border-none bg-transparent rounded-md focus:outline-none focus:border-[#357937]"
          />
          <div className="flex justify-between items-center px-8">
            <div className="flex text-2xl gap-6">
              <IoMdNotificationsOutline className="cursor-pointer" />
              <LuRepeat className="cursor-pointer" />
              <CiCalendar className="cursor-pointer" />
            </div>

            <button
              onClick={handleAddTask}
              className="bg-[#357937] text-white px-4 py-2 rounded-md hover:bg-[#285928] transition"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>

      {/* To-Do List */}
      <div
        className={`${
          state.theme === "dark" ? "bg-[#2C2C2C]" : "bg-[#FBFDFC]"
        } p-4 rounded-md shadow-md mb-6`}
      >
        <h2 className="text-xl font-semibold mb-4">To-Do</h2>
        <ul className="flex flex-col gap-3">
          {state.todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-transparent p-2 border rounded-md"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="cursor-pointer"
                  />
                  <span>{todo.task}</span>
                </div>
                <button
                  onClick={() => toggleImportant(todo.id)}
                  className={`text-lg ${
                    todo.important ? "text-[#357937]" : "text-gray-300"
                  }`}
                >
                  {!todo.important && <FaRegStar className="text-2xl" />}
                  {todo.important && <FaStar className="text-2xl" />}
                </button>
              </li>
            ))}
        </ul>
      </div>

      {/* Completed List */}
      <div className="bg-transparent p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Completed</h2>
        <ul className="flex flex-col gap-3">
          {state.todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between bg-transparent p-2 border rounded-md"
              >
                <span className="line-through">{todo.task}</span>
                <button
                  onClick={() => removeCompletedTask(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;