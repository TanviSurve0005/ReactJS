import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-white rounded-2xl sm:mx-16 mx-2 sm:py-16 bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 shadow-2xl">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-5xl font-bold sm:text-6xl leading-tight">
                            Powerful React
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500 text-5xl sm:text-6xl">Development</span>
                        </h2>
                        <p className="text-lg text-gray-200 max-w-md ml-auto">Build modern web applications with our cutting-edge React routing and component architecture.</p>

                        <Link
                            className="inline-flex text-white items-center px-8 py-4 font-semibold bg-gradient-to-r from-orange-500 to-orange-700 rounded-full hover:from-orange-600 hover:to-orange-800 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 transform hover:scale-105"
                            to="/"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 011-1h12a1 1 0 011 1H3zm0 4h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z"></path></svg>
                            Get Started Now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full opacity-20">
                    <img className="w-96 object-cover" src="https://images.pexels.com/photos/7974/pexels-photo.jpg" alt="hero" />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20 mt-12">
                <div className="text-center space-y-6">
                    <div className="inline-block p-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full">
                        <div className="bg-white px-4 py-2 rounded-full text-orange-600 font-semibold text-sm">✨ Featured Component</div>
                    </div>
                    <img className="sm:w-96 w-48 rounded-lg shadow-xl" src="https://images.pexels.com/photos/8306343/pexels-photo-8306343.jpeg" alt="feature" />
                </div>
            </div>

            <h1 className="text-center text-3xl sm:text-5xl py-16 font-bold bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">Build Faster, Deploy Smarter</h1>
        </div>
    );
}
