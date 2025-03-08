// src/components/March.js
import React, { useState } from 'react';

const March = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSeeMore = () => {
    setShowNotification(true);
    
    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <section
      className="relative min-h-screen w-full text-white overflow-hidden z-[-10] bg-[#00B4DD] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('img/bgg.png')",
      }}
    >
      {/* Main content container */}
      <div className="container mx-auto px-4 py-1 position-fixed text-center relative z-10 flex flex-col items-center min-h-screen justify-center">
        {/* See More button with notification */}
        <div className="relative">
          <button 
            className="bg-teal-500 text-white px-30 py-3 rounded-full font-medium hover:bg-teal-600 transition duration-300 mt-25 mb-1"
            onClick={handleSeeMore}
          >
            See More
          </button>
          
          {/* Under Development Notification */}
          {showNotification && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg shadow-lg border border-yellow-300 z-50 whitespace-nowrap animate-fade-in">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="font-medium">Under Development</span>
              </div>
            </div>
          )}
        </div>

        {/* Partners heading with wavy underline */}
        <div className="text-center mb-2 mt-1">
          <h2 className="text-xl text-hint mb-1">Our Merchandise Partners</h2>
          <div className="w-48 h-2 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
              <path
                d="M0,5 C10,0 20,10 30,5 C40,0 50,10 60,5 C70,0 80,10 90,5 C100,0"
                fill="none"
                stroke="#2A475e"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>

        {/* Partner logos container */}
        <div className="flex flex-wrap justify-center items-center gap-8 w-full max-w-4xl mb-55">
          <div className="flex justify-center items-center h-20">
            <img src="img/sos1.png" alt="Artch logo" className="max-h-20 object-contain" />
          </div>
          <div className="flex justify-center items-center h-20">
            <img src="img/sos3.png" alt="Colorful logo" className="max-h-18 object-contain" />
          </div>
          <div className="flex justify-center items-center h-20">
            <img src="img/sos2.png" alt="Triangle logo" className="max-h-40 object-contain" />
          </div>
          <div className="flex justify-center items-center h-20">
            <img src="img/sos4.png" alt="Nool logo" className="max-h-16 object-contain" />
          </div>
        </div>
      </div>

      {/* Full-width leaf background with mascot */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none">
        <div className="w-1/2 flex justify-end">
          <img src="img/leaves-branch-left.png" alt="" className="h-32 object-contain mr-4" />
        </div>
        <div className="absolute bottom-0.5 transform -translate-y-4">
          <img src="img/df.png" alt="Sun mascot character" className="h-70 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default March;