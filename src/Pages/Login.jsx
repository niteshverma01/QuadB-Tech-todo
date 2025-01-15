import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { state, dispatch } = useContext(GlobalContext); // Access global state and dispatch
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock user credentials
        const mockUser = { username: "myuser", password: "password@123" };

        // Validate credentials
        if (username === mockUser.username && password === mockUser.password) {
            dispatch({ type: "LOGIN_SUCCESS", payload: { username } }); // Update global state
            navigate("/"); // Redirect to home page
        } else {
            alert("Invalid username or password!");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:border-[#357937]"
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:border-[#357937]"
                            placeholder="Enter password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#357937] text-white py-2 rounded hover:bg-[#285928] transition"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-sm text-gray-500">
                    <p>Use the following credentials:</p>
                    <p><strong>Username:</strong> myuser</p>
                    <p><strong>Password:</strong> password@123</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
