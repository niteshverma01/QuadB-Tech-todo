import React, { createContext, useReducer, useEffect } from "react";

// Create the context
export const GlobalContext = createContext();

// Initial state
const initialState = {
    isSidebarVisible: true,
    theme: localStorage.getItem("theme") || "light",
    todos: [
        { id: 1, task: "Learn React Context", completed: false, important: false },
        { id: 2, task: "Build a To-Do App", completed: false, important: true },
        { id: 3, task: "Completed Task Example", completed: true, important: false },
        { id: 4, task: "Complete Assignment ", completed: true, important: false },
        { id: 5, task: "Update portfolio", completed: true, important: false },
        { id: 6, task: "Apply for an internship", completed: false, important: true },
        { id: 7, task: "Do a coding challenge", completed: false, important: false },
    ],
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null, // User object
};

// Reducer function to handle state updates
const globalReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("user", JSON.stringify(action.payload));
            return { ...state, isAuthenticated: true, user: action.payload };
        case "LOGOUT":
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("user");
            return { ...state, isAuthenticated: false, user: null };
        case "TOGGLE_SIDEBAR":
            return { ...state, isSidebarVisible: !state.isSidebarVisible };
        case "TOGGLE_THEME":
            localStorage.setItem("theme", state.theme === "light" ? "dark" : "light");
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        case "ADD_TODO":
            return { ...state, todos: [...state.todos, action.payload] };
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case "TOGGLE_IMPORTANT":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, important: !todo.important }
                        : todo
                ),
            }
        case "REMOVE_TODO":
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        default:
            return state;
    }
};

// GlobalState provider
export const GlobalProvider = ({ children }) => {
    // useReducer hook takes in a reducer function and an initial state
    // and returns an array with the current state value and a dispatch function
    // to update the state
    const [state, dispatch] = useReducer(globalReducer, initialState);

    useEffect(() => {
        if (state.isAuthenticated) {
            localStorage.setItem("isAuthenticated", true);
        } else {
            localStorage.removeItem("isAuthenticated");
        }
    }, [state.isAuthenticated]);

    useEffect(() => {
        if (state.theme) {
            localStorage.setItem("theme", state.theme);
        } else {
            localStorage.removeItem("theme");
        }
    }, [state.theme]);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

