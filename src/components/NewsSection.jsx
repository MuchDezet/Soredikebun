import React from 'react';

const NewsSection = () => {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "Mengenal Lebih Dekat Bucephalandra Lewat Sunset di Kebun",
      excerpt: "Saat ini tengah marak beragam konser diselenggarakan di...",
      image: "img/1.jpg",
      alt: "Bucephalandra concert image"
    },
    {
      id: 2,
      title: "Sunset di Kebun Kembali Hadir, Kenalkan Bucephalandra Sambil Menikmati Musik",
      excerpt: "Menghadiri sebuah konser musik menjadi salah satu cara...",
      image: "img/2.jpg",
      alt: "Sunset di Kebun event"
    },
    {
      id: 3,
      title: "Sampaikan Pesan Konservasi Melalui Musik, Sunset di Kebun...",
      excerpt: "Kebun Raya kembali menggelar Sunset di Kebun, sebuah...",
      image: "img/program/9.jpg",
      alt: "Concert at botanical garden"
    },
    {
      id: 4,
      title: "Buruknya Udara Jakarta, Sunset di Kebun Raya Cibodas...",
      excerpt: "Kualitas udara Jakarta saat ini sedang tidak baik-baik...",
      image: "img/4.jpg",
      alt: "Cibodas botanical garden"
    },
    {
      id: 5,
      title: "Sunset di Kebun Raya Cibodas Kembali Digelar, Hadirkan...",
      excerpt: "Menyuarakan konservasi dan cinta lingkungan, Kebun Raya kembali...",
      image: "img/program/10.jpg",
      alt: "Concert crowd"
    },
    {
      id: 6,
      title: "Usung Pesan Konservasi dan Cinta Lingkungan, Sunset di...",
      excerpt: "Menyuarakan konservasi dan cinta lingkungan...",
      image: "img/6.jpg",
      alt: "Audience at sunset concert"
    }
  ];

  return (
    <section className="py-[-20] mt-[-20] bg-gradient-to-b from-primary via-blue-200 to-[#00B4DD] text-white z-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-indigo-900 mb-2">News</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        {/* News Grid - Centered Layout */}
        <div className="grid grid-cols-2 z-10 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[-70px] justify-center">
          {newsItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-4xl shadow overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1 ${
                index === 1 ? 'md:col-start-2 md:col-span-1 lg:col-start-auto' : ''
              }`}
            >
              <div className="relative h-55 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm text-indigo-900 mb-1 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">{item.excerpt}</p>
                <button className="text-indigo-600 text-xs font-medium hover:text-indigo-800 transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;