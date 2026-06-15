import React from 'react'

export default function Contact() {
    return (
        <div className="relative flex items-top justify-center min-h-[800px] bg-gradient-to-b from-gray-50 to-white sm:items-center sm:pt-0 py-20">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 w-full">
                <div className="mt-8 overflow-hidden rounded-2xl shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Contact Info Section */}
                        <div className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                            <h1 className="text-4xl font-bold leading-tight mb-2">
                                Let's Connect
                            </h1>
                            <p className="text-lg text-gray-300 mb-8">
                                Have a question? We'd love to hear from you.
                            </p>

                            {/* Location */}
                            <div className="flex items-start gap-4 mb-8 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Address</h3>
                                    <p className="text-gray-300">123 Developer Street, Tech City, TC 12345</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 mb-8 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                                    <p className="text-gray-300">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Email</h3>
                                    <p className="text-gray-300">hello@example.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="p-8 flex flex-col justify-center bg-white">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="font-semibold text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="John Doe"
                                    className="py-3 px-4 rounded-lg bg-gray-50 border-2 border-gray-300 text-gray-800 font-medium focus:border-orange-500 focus:bg-white focus:outline-none transition-colors duration-200"
                                />
                            </div>

                            <div className="flex flex-col mt-6">
                                <label htmlFor="email" className="font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="py-3 px-4 rounded-lg bg-gray-50 border-2 border-gray-300 text-gray-800 font-medium focus:border-orange-500 focus:bg-white focus:outline-none transition-colors duration-200"
                                />
                            </div>

                            <div className="flex flex-col mt-6">
                                <label htmlFor="tel" className="font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="+1 (555) 000-0000"
                                    className="py-3 px-4 rounded-lg bg-gray-50 border-2 border-gray-300 text-gray-800 font-medium focus:border-orange-500 focus:bg-white focus:outline-none transition-colors duration-200"
                                />
                            </div>

                            <div className="flex flex-col mt-6">
                                <label htmlFor="message" className="font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    placeholder="Your message here..."
                                    className="py-3 px-4 rounded-lg bg-gray-50 border-2 border-gray-300 text-gray-800 font-medium focus:border-orange-500 focus:bg-white focus:outline-none transition-colors duration-200 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-8 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
