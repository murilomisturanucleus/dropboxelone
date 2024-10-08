import React from 'react';

const Hero = () => {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Get to work, with a lot less work
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Dropbox delivers tools that help you move your work forward faster, keep it safe, and
        let you collaborate with ease.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600">
          Sign up free →
        </button>
        <button className="border border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black">
          Find your plan →
        </button>
      </div>
      <p className="mt-4 text-sm">No credit card required.</p>
    </div>
  );
};

export default Hero;