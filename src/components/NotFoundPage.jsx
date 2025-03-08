import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-primary to-third">
      {/* Single full screen background image */}
      <div 
        className="absolute inset-0 z-1 "
        style={{
          backgroundImage: 'url("img/footer.png")',  // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Enhanced animated character with more personality */}
        <div className="relative w-56 h-56 mb-8">
          <img 
            src="img/1.png" 
            alt="Cute Lost Character" 
            className="w-full h-full object-contain animate-wobble"
          />
          <div className="absolute -top-8 -right-2 bg-purple-500 text-white p-3 rounded-full transform rotate-6 animate-bounce">
            <span className="text-lg font-bold">Lost!</span>
          </div>
          <div className="absolute -bottom-4 left-0 bg-teal-400 text-white p-2 rounded-full transform -rotate-12 animate-pulse">
            <span className="text-sm">Help me!</span>
          </div>
        </div>
        
        {/* More dynamic 404 text */}
        <h1 className="text-9xl font-extrabold text-center text-white mb-6 drop-shadow-2xl">
          4
          <span className="inline-block animate-bounce text-yellow-400 mx-2">0</span>
          4
        </h1>
        
        <h2 className="text-4xl font-bold text-center text-white mb-8 drop-shadow-lg animate-pulse-slow">
          Oops! You're in the Fun Void!
        </h2>
        
        <p className="text-center text-white mb-10 max-w-lg px-4 drop-shadow-lg text-lg">
          Looks like you've stumbled into a cosmic giggle zone! 
          Our little explorer is just as confused as you are—let's escape together!
        </p>
        
        {/* Action buttons with more flair */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            to="/" 
            className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 text-white font-extrabold py-4 px-10 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center animate-pulse-slow"
          >
            Warp Back Home
          </Link>
          <Link 
            to="/program" 
            className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 text-white font-extrabold py-4 px-10 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center animate-bounce-slow"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;