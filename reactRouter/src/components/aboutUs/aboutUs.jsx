import React from 'react'

export default function About() {
    return (
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container m-auto px-6 md:px-12 xl:px-6">
                <div className="space-y-12 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-16">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/37943692/pexels-photo-37943692.jpeg"
                            alt="team"
                            className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12 space-y-6">
                        <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm">About Our Mission</div>
                        <h2 className="text-3xl md:text-5xl text-gray-900 font-bold leading-tight">
                            Built by passionate developers, for developers
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We believe in the power of React to transform how web applications are built. Our team combines years of experience with cutting-edge practices to deliver exceptional results.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            From concept to deployment, we focus on creating scalable, maintainable, and user-friendly solutions that exceed expectations.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-700 font-medium">Modern Stack</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-700 font-medium">Best Practices</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}