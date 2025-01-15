import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Trash2 } from "lucide-react";

const DisplayTodo = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const handleToggleComplete = (id) => {
        dispatch({ type: "TOGGLE_COMPLETE", payload: id });
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="space-y-6">
                {/* Active Todos Section */}
                <section>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">To-Do</h2>
                    {state.todos.filter(todo => !todo.completed).length === 0 ? (
                        <p className="text-gray-500 italic">No pending tasks</p>
                    ) : (
                        <ul className="space-y-3">
                            {state.todos
                                .filter((todo) => !todo.completed)
                                .map((todo) => (
                                    <li
                                        key={todo.id}
                                        className="flex items-center justify-between bg-gray-50 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow duration-200"
                                    >
                                        <div className="flex items-center space-x-3 flex-grow">
                                            <input
                                                type="checkbox"
                                                onChange={() => handleToggleComplete(todo.id)}
                                                className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                                            />
                                            <span className="text-gray-700 break-words flex-grow">{todo.task}</span>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    )}
                </section>

                {/* Completed Todos Section */}
                <section>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Completed</h2>
                    {state.todos.filter(todo => todo.completed).length === 0 ? (
                        <p className="text-gray-500 italic">No completed tasks</p>
                    ) : (
                        <ul className="space-y-3">
                            {state.todos
                                .filter((todo) => todo.completed)
                                .map((todo) => (
                                    <li
                                        key={todo.id}
                                        className="flex items-center justify-between bg-green-50 p-4 border border-green-100 rounded-lg hover:shadow-sm transition-shadow duration-200"
                                    >
                                        <div className="flex items-center space-x-3 flex-grow">
                                            <span className="line-through text-gray-500 break-words flex-grow">{todo.task}</span>
                                            <button
                                                onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
                                                className="p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50 transition-colors duration-200"
                                                aria-label="Remove task"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    )}
                </section>
            </div>
        </div>
    );
};

export default DisplayTodo;