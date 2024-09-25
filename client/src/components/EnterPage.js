import React from "react";
import { Link } from "react-router-dom";

const EnterPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
            <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg max-w-lg w-full transform transition-all duration-500 hover:scale-105">
                <h1 className="text-4xl sm:text-5xl font-bold text-green-500 mb-6">
                    Welcome to Connecting!
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-8">
                    Connect with friends and explore their posts.
                </p>
                <blockquote className="italic text-base sm:text-lg text-gray-400 mb-10">
                    "Let's connect through the Connecting website"
                </blockquote>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link to="/signup">
                        <button className="bg-green-500 text-black font-bold py-3 px-6 rounded shadow hover:bg-green-400 transition duration-300 transform hover:scale-105 text-lg">
                            Sign Up
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="bg-green-500 text-black font-bold py-3 px-6 rounded shadow hover:bg-green-400 transition duration-300 transform hover:scale-105 text-lg">
                            Log In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EnterPage;
