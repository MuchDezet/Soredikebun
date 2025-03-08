import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const [showNotificationCard, setShowNotificationCard] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setNotification('Please fill in all fields before logging in.');
      setShowNotificationCard(true);
      setTimeout(() => {
        setShowNotificationCard(false);
        setNotification('');
      }, 4000); // Hide notification after 4 seconds
      return;
    }
    // Logika login di sini (misalnya API call)
    console.log('Login submitted:', { email, password });
    setNotification('Login successful!'); // Contoh notifikasi sukses
    setShowNotificationCard(true);
    setTimeout(() => {
      setShowNotificationCard(false);
      setNotification('');
    }, 3000);
  };

  const isFormValid = !email || !password;

  const NotificationCard = () => {
    if (!showNotificationCard) return null;

    return (
      <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
        <div className="bg-primary rounded-2xl shadow-lg p-6 w-72 border-4 border-pink-400 relative overflow-hidden">
          {/* Fun decorative elements */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-300 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-500 rounded-tl-full"></div>
          
          {/* Emoji based on notification type */}
          <div className="text-4xl text-center mb-2">
            {notification.includes('successful') ? '🎉' : '🙈'}
          </div>
          
          {/* Notification message */}
          <p className="text-purple-900 font-bold text-center relative z-10">
            {notification}
          </p>
          
          {/* Fun close button */}
          <button 
            onClick={() => setShowNotificationCard(false)}
            className="mt-4 bg-pink-400 text-white font-bold py-2 px-4 rounded-full mx-auto block hover:bg-pink-500 transition-colors"
          >
            Got it!
          </button>
          
          {/* Decorative dots */}
          <div className="absolute top-2 right-2 h-3 w-3 bg-cyan-300 rounded-full"></div>
          <div className="absolute top-6 right-4 h-2 w-2 bg-pink-300 rounded-full"></div>
          <div className="absolute bottom-2 left-2 h-3 w-3 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-6 left-4 h-2 w-2 bg-purple-300 rounded-full"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-cyan-300 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Corner decorations */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-900 rounded-tr-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-900 rounded-tl-full z-0"></div>
      
      {/* Notification Card */}
      <NotificationCard />
      
      <div className="w-full max-w-2xl z-10">
        {/* Logo - replaced with image */}
        <div className="flex justify-center mb-5">
          <div className="w-56 h-20 rounded-lg flex items-center justify-center">
            <img 
              src="img/PUTIH.png" 
              alt="Sunset di Kebun" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Mascot - replaced with image */}
        <div className="flex justify-center my-8">
          <div className="w-40 h-40 rounded-full flex items-center justify-center">
            <img 
              src="img/maskot.png" 
              alt="Sunset Mascot" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Sign In Text */}
        <h1 className="text-4xl font-bold text-[#4A192C] uppercase tracking-wider text-center mb-8 font-[Caesar_Dressing]">
          Sign In
        </h1>
        
        {/* Register Link */}
        <div className="text-center text-[#4A192C] mb-6">
          <span>Don't have an account? </span>
          <span 
            className="text-purple-900 font-bold hover:text-yellow-300 transition-colors cursor-pointer"
            onClick={handleRegisterClick}
          >
            Register
          </span>
        </div>
        
        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-[#4A192C] text-lg font-[Caesar_Dressing]">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or phone number"
              className="w-full px-4 py-3 rounded-full text-purple-900 placeholder-purple-900 border-2 border-pink-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-[#4A192C] text-lg font-[Caesar_Dressing]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-full text-purple-900 placeholder-purple-900 border-2 border-pink-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-3 text-pink-500 hover:text-purple-900 transition-colors"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            <div className="text-right">
              <a href="#" className="text-purple-900 text-sm hover:text-yellow-300 transition-colors">
                Forgot your password?
              </a>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-pink-500 text-[#4A192C] font-bold py-3 px-4 rounded-full uppercase font-[Caesar_Dressing] hover:bg-pink-400 transition-colors shadow-lg"
            disabled={isFormValid} // Disable jika form tidak valid
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;