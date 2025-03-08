// File: BackgroundSection.jsx

import React from 'react';

const BackgroundSection = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white via-[#87CEEB] to-[#0096FF] z-[-1]"
      ></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('img/footer.png')`
        }}
      ></div>
    </div>
  );
};

export default BackgroundSection;