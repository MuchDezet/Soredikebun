import React from 'react';

const MerchandiseShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-[#ffffff] text-third relative">
      {/* Top Images Section */}
      <div className="flex justify-center pt-16 gap-24">
        <div className="w-52 h-52 flex items-center justify-center transform -rotate-3 animate-carnival-sway">
          <img src="img/logo.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="w-52 h-52 flex items-center justify-center transform rotate-3 animate-carnival-sway">
          <img src="img/program/store1.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Coming Soon Text */}
      <div className="text-center mt-20">
        <h1 className="text-7xl font-extrabold text-third animate-carnival-reveal font-primary tracking-wide">
          COMING SOON!
        </h1>
      </div>

      {/* Merchandise Showcase */}
      <div className="container mx-auto px-4 py-60">
        <h2 className="text-5xl  text-center text-third mb-8 animate-carnival-reveal font-primary tracking-wide">
          Sunset Store Merchandise
        </h2>
      </div>
    </div>
  );
};

export default MerchandiseShowcase;