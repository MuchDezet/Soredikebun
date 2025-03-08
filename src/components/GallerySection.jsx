// GallerySection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      src: 'img/jakarta.jpg',
      alt: 'Taman Mini Indonesia Indah',
      title: 'Taman Mini Indonesia Indah'
    },
    {
      id: 2,
      src: 'img/bogor.jpg',
      alt: 'Bogor',
      title: 'Bogor'
    },
    {
      id: 3,
      src: 'img/cibodas.jpg',
      alt: 'Kebun Raya Cibodas',
      title: 'Kebun Raya Cibodas'
    },
    {
      id: 4,
      src: 'img/purwodadi.jpg',
      alt: 'Purnama Bali',
      title: 'Purwodadi'
    },
    {
      id: 5,
      src: 'img/bali.jpg',
      alt: 'Pantai Kuta',
      title: 'Bali'
    }
  ];

  // Duplikat array untuk efek seamless
  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <section className="bg-gradient-to-b from-teal-500 via-teal-200 to-primary py-1">
      <div className="container mx-auto px-5">
        {/* Header Gallery - Diposisikan di tengah dengan jarak */}
        <div className="flex justify-center items-center mb-16 mt-6">
          <h2 className="text-4xl font-bold text-white">Gallery</h2>
        </div>

        {/* Gallery Running Text */}
        <div className="overflow-hidden relative">
          <div 
            className="flex animate-marquee whitespace-nowrap hover:pause-animation"
            style={{
              animationDuration: '15s', // Kecepatan sedang
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`} // Key unik untuk setiap elemen
                className="w-70 h-70 flex-shrink-0 mx-2 bg-white rounded-xl shadow-lg overflow-hidden relative border-6 border-third group cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                {/* Enhanced overlay with 3D effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-800 via-purple-600 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 flex flex-col justify-end p-4 transform translate-y-full group-hover:translate-y-0">
                  <h3 className="text-white text-lg font-bold mb-1 transform -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">{item.title}</h3>
                  <div className="w-12 h-1 bg-white rounded transform -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200 mb-2"></div>
                  <p className="text-white text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300">
                    Explore beautiful Indonesia
                  </p>
                </div>
                {/* Corner badge effect */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-pink-500 rotate-45 transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-all duration-500"></div>
                <div className="absolute top-3 right-3 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 z-10">
                  View
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See More Button - Updated with Link to 404 page */}
        <div className="text-center mt-18">
          <Link to="/gallery-more">
            <button className="bg-pink-500 text-white px-28 py-2 rounded-full hover:bg-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-pink-300">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;