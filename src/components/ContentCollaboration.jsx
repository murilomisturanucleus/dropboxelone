import React from 'react';

const ContentCollaboration = () => {
  return (
    <div className="bg-white text-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Content collaboration
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
          Work with anyone, from anywhere, on any device
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-600">
          Dropbox delivers flexible sharing, smart organization, and seamless collaboration—even for those
          without an account—so you and your team can get it done, and done right.
        </p>
        <div className="flex justify-center space-x-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center">
            Get started free
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-blue-600 font-semibold flex items-center hover:underline">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="mt-16">
          <img
            src="/collaboration-image.png"
            alt="Content collaboration"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCollaboration;