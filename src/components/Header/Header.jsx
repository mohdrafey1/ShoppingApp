import React from 'react';

function Header() {
    return (
        <div className="bg-gray-900 py-4 h-24 mb-6 w-full">
            <div className="container mx-auto flex items-center justify-between">
                <div
                    className="text-white text-3xl font-bold ml-12 sm:ml-64"
                    style={{ fontFamily: 'Rubik Scribble, sans-serif' }}
                >
                    <a href="#">Jee Bhar Ke Shopping</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
