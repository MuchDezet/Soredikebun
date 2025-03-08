import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 90000); // 90 detik = 1.5 menit

    return () => clearTimeout(timer); // Cleanup saat komponen unmount
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-pink-500 flex items-center justify-center z-50">
          <div className="relative">
            {/* Gambar di tengah */}
            <img 
              src="img/loader.gif" // Ganti dengan URL gambar Anda
              alt="Loading"
              className="w-32 h-32 animate-pulse"
            />
            {/* Animasi lingkaran loading */}
            {/* Teks loading */}
            <p className="text-white text-center mt-4 animate-pulse">
              Loading...
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;