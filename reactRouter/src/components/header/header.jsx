import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <header className="sticky z-50 top-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
            <nav className="px-4 lg:px-6 py-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12 hover:scale-105 transition-transform"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2 space-x-3">
                        <Link
                            to="#"
                            className="text-gray-200 hover:text-white hover:bg-gray-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 lg:py-3 transition-all duration-200 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 focus:ring-4 focus:ring-orange-300 font-semibold rounded-lg text-sm px-4 lg:px-5 py-2.5 lg:py-3 transition-all duration-200 focus:outline-none shadow-md hover:shadow-lg"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-full lg:w-auto">
                            
                             <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 rounded transition-all duration-200 ${isActive ? 'text-orange-400 bg-gray-700 lg:bg-transparent' : 'text-gray-300 hover:text-orange-400'} border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                             <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 rounded transition-all duration-200 ${isActive ? 'text-orange-400 bg-gray-700 lg:bg-transparent' : 'text-gray-300 hover:text-orange-400'} border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 rounded transition-all duration-200 ${isActive ? 'text-orange-400 bg-gray-700 lg:bg-transparent' : 'text-gray-300 hover:text-orange-400'} border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 rounded transition-all duration-200 ${isActive ? 'text-orange-400 bg-gray-700 lg:bg-transparent' : 'text-gray-300 hover:text-orange-400'} border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

