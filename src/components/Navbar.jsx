import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-black">
      <div className="flex items-center space-x-8">
        <div className="flex items-center">
          <img src="/dropbox-icon.svg" alt="Dropbox" className="w-8 h-8 mr-2 text-blue-500" />
          <span className="font-bold text-xl">Dropbox</span>
        </div>
        <div className="hidden lg:flex space-x-6">
          <div className="group relative">
            <a href="#" className="hover:text-gray-300">Products ▾</a>
            {/* Add dropdown menu here if needed */}
          </div>
          <div className="group relative">
            <a href="#" className="hover:text-gray-300">Solutions ▾</a>
            {/* Add dropdown menu here if needed */}
          </div>
          <a href="#" className="hover:text-gray-300">Enterprise</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#" className="hidden lg:inline-block hover:text-gray-300">Contact sales</a>
        <div className="group relative">
          <a href="#" className="hidden lg:inline-block hover:text-gray-300">Get app ▾</a>
          {/* Add dropdown menu here if needed */}
        </div>
        <a href="#" className="hidden sm:inline-block hover:text-gray-300">Sign up</a>
        <a href="#" className="hidden sm:inline-block hover:text-gray-300">Log in</a>
        <button className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;