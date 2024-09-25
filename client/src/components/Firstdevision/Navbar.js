import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="  w-1/4 h-screen bg-black text-white p-4">
            <nav>
                {/* Logo Section */}
                <div className="mb-8">
                    <h1 className="font-serif text-3xl font-bold text-green-500">Connecting</h1>
                </div>

                {/* Navigation Links */}
                <ul className="space-y-6">
                    <li>
                        <Link to="/connecting" className="text-2xl font-bold hover:text-green-400 transition duration-200">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/connecting/messages" className="text-2xl hover:text-green-400 transition duration-200">
                            Messages
                        </Link>
                    </li>
                    <li>
                        <Link to="/connecting/profile" className="text-2xl hover:text-green-400 transition duration-200">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/connecting/privacy" className="text-2xl hover:text-green-400 transition duration-200">
                            Privacy & Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="/connecting/about" className="text-2xl hover:text-green-400 transition duration-200">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/connecting/something" className="text-2xl hover:text-green-400 transition duration-200">
                            Something
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
