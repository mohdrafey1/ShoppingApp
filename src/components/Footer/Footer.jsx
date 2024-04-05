import React from 'react';

function Footer() {
    return (
        <footer className="bg-white p-4 w-full mt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-lg font-semibold text-gray-800 mr-2 text-center mb-2">
                    Get New Posts
                </h2>
                <div className="flex justify-center items-center">
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Inspired by Neal Fun"
                            className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                        />
                        <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
