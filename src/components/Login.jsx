import React, { useState } from 'react';

const Login = () => {
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showNotification, setShowNotification] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    // Logika login di sini
    console.log('Login attempted with:', emailPhone, password);
    setShowNotification(false); // Sembunyikan notifikasi setelah login
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {showNotification && (
        <div className="bg-pink-100 border-l-4 border-pink-500 text-pink-700 p-4 mb-4 rounded-md shadow-md w-full max-w-md">
          <p className="font-semibold">Selamat Datang!</p>
          <p>Silakan login untuk membeli tiket atau mendaftar ke acara kami.</p>
        </div>
      )}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email/Phone</label>
            <input
              type="text"
              value={emailPhone}
              onChange={(e) => setEmailPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email or phone"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Login
          </button>
          <button
            type="button"
            className="w-full bg-gray-300 text-gray-700 p-2 rounded-md mt-2 hover:bg-gray-400 transition-colors"
          >
            Buy Ticket and Register
          </button>
          <a href="#" className="text-purple-600 text-sm text-center block mt-2">
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;