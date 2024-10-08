import React from 'react';

const Screenshot = () => {
  return (
    <div className="relative mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-20"></div>
      <img
        src="/all-files-desktop.png"
        alt="Dropbox interface"
        className="w-full object-cover"
        style={{ maxHeight: '60vh' }}
      />
    </div>
  );
};

export default Screenshot;
