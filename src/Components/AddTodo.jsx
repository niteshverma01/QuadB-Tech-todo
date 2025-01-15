import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddToDo = () => {
    const [task, setTask] = useState("");
    const { dispatch } = useContext(GlobalContext);
    
    const handleAddTask = () => {
        if (task.trim() === "") return;
        
        const newTodo = {
            id: Date.now(),
            task,
            completed: false,
        };
        dispatch({ type: "ADD_TODO", payload: newTodo });
        setTask("");
    };
    
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="p-4 flex flex-col gap-4 bg-gray-50 rounded-lg shadow-md">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add A Task"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base sm:text-lg placeholder:text-gray-400"
                />
                <button
                    onClick={handleAddTask}
                    className="w-full sm:w-auto px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors duration-200 font-medium text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default AddToDo;