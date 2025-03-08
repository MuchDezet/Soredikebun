const NextSection = () => {
  // Komponen ikon animasi sebagai pengganti titik
  const MusicIcon = ({ type }) => {
    switch (type) {
      case 'guitar':
        return (
          <svg className="inline-block w-6 h-6 mx-2 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.6 3.4L19 2c-1.1-.9-2.7-.7-3.6.4L3 16.6c-.9 1.1-.7 2.7.4 3.6l1.6 1.4c.5.4 1.1.6 1.7.6.8 0 1.5-.3 2-.9l12.4-14.2c.9-1.1.7-2.7-.4-3.7zM8.3 18.6c-.2.2-.5.3-.8.3-.2 0-.4-.1-.6-.2l-1.6-1.4c-.3-.3-.4-.6-.2-.9l2.5-3 2.1 2.4-1.4 2.8zm2-3.4l-2.1-2.4 8.6-9.9 2.1 2.4-8.6 9.9z"/>
          </svg>
        );
      case 'note':
        return (
          <svg className="inline-block w-6 h-6 mx-2 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 4h-7v10h-2V4H3v16h18V4zm-10 14H5v-2h6v2zm0-4H5v-2h6v2z"/>
          </svg>
        );
      default:
        return (
          <svg className="inline-block w-6 h-6 mx-2 animate-spin" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
          </svg>
        );
    }
  };

  return (
    <section className="relative h-[120vh] flex flex-col items-center justify-center bg-primary overflow-hidden">
      {/* Bagian atas tetap sama */}
      <div className="absolute top-25 text-center">
        <div className="flex items-center justify-center space-x-12">
          <span className="text-9xl font-primary text-third">2025</span>
          <svg width="20" height="80" viewBox="0 0 20 80" className="fill-current text-third">
            <path 
              d="M10 0 L15 10 Q18 15 15 20 L5 30 Q2 35 5 40 L15 50 Q18 55 15 60 L5 70 Q2 75 5 80" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
            />
          </svg>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-primary text-third">5</span>
            <span className="text-2xl font-primary text-third">CITY</span>
          </div>
          <svg width="20" height="80" viewBox="0 0 20 80" className="fill-current text-third">
            <path 
              d="M10 0 L15 10 Q18 15 15 20 L5 30 Q2 35 5 40 L15 50 Q18 55 15 60 L5 70 Q2 75 5 80" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
            />
          </svg>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-primary text-third">6</span>
            <span className="text-2xl font-primary text-third">SERIES</span>
          </div>
          <svg width="20" height="80" viewBox="0 0 20 80" className="fill-current text-third">
            <path 
              d="M10 0 L15 10 Q18 15 15 20 L5 30 Q2 35 5 40 L15 50 Q18 55 15 60 L5 70 Q2 75 5 80" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
            />
          </svg>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-primary text-third">&gt;40</span>
            <span className="text-2xl font-primary text-third">PERFORMANCES</span>
          </div>
        </div>
      </div>

      {/* Deskripsi Teks Kecil */}
      <p className="absolute top-60 text-center text-xl font-secondary text-third max-w-6xl px-4">
        Sunset di Kebun menggabungkan musik dan keindahan alam dari Kebun Raya
        Sunset di Kebun menawarkan pengalaman menikmati musik yang berbeda di mana penonton bisa menyatu dengan alam
        menikmati musik lebih dekat dengan musisi
        dan menikmati duduk di hamparan rumput yang luas
      </p>

      {/* Karakter Animasi Kuning */}
      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="img/1.png"
          alt="Character"
          className="w-28 h-32 object-contain"
        />
      </div>

      {/* Gambar WISHLIST PERFORMANCES */}
      <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2">
        <img 
          src="img/2.png"
          alt="Wishlist Performances"
          className="w-50 h-auto object-contain"
        />
      </div>

      {/* Daftar Artis dengan Hover Effect */}
      <div className="absolute bottom-10 text-center w-full">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-4xl font-display text-third font-primary uppercase tracking-wide transform skew-x-[-10deg]">
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              TULUS
              <img src="img/hover/1.jpg" alt="Tulus" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="guitar" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              RAISA
              <img src="img/hover/2.png" alt="Raisa" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="note" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              BERNADYA
              <img src="img/hover/3.jpg" alt="Bernadya" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="guitar" />
            {/* Lanjutkan untuk artis lainnya dengan pola yang sama */}
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              D’MASIV
              <img src="img/hover/4.jpeg" alt="D’Masiv" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="note" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              PAMUNGKAS
              <img src="img/hover/5.jpeg" alt="Pamungkas" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="note" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              JUICY LUICY
              <img src="img/bermadya.jpg" alt="Bernadya" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="note" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              NADIN AMIZAH
              <img src="img/bermadya.jpg" alt="Bernadya" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="note" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              HIVI
              <img src="img/bermadya.jpg" alt="Bernadya" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>

            
            {/* Tambahkan lainnya sesuai kebutuhan */}
          </p>
          {/* Baris kedua */}
          <p className="text-4xl font-display text-third font-primary uppercase tracking-wide transform skew-x-[-10deg]">
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              BILAL INDRAJAYA
              <img src="img/bilal.jpg" alt="Bilal Indrajaya" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="guitar" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              DERE
              <img src="img/bilal.jpg" alt="Bilal Indrajaya" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="guitar" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              PERUNGGU
              <img src="img/bilal.jpg" alt="Bilal Indrajaya" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="guitar" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              GHEA INDRAWARI
              <img src="img/bilal.jpg" alt="Bilal Indrajaya" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="guitar" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              LOMBA SIHIR
              <img src="img/bilal.jpg" alt="Bilal Indrajaya" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
                        <MusicIcon type="guitar" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              ECOUTEZ
              <img src="img/bilal.jpg" alt="Bilal Indrajaya" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>


          </p>
          {/* Baris ketiga */}
          <p className="text-4xl font-display text-third font-primary uppercase tracking-wide transform skew-x-[-10deg]">
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              REVENGE
              <img src="img/revenge.jpg" alt="Revenge" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="note" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              SUARA KAYU
              <img src="img/revenge.jpg" alt="Revenge" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="note" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              GOOD MORNING EVERYONE
              <img src="img/revenge.jpg" alt="Revenge" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="note" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              SWELLOW
              <img src="img/revenge.jpg" alt="Revenge" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="note" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              STARDUCC
              <img src="img/revenge.jpg" alt="Revenge" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>
            <MusicIcon type="note" />
            <span className="group relative hover:text-blue-300 transition-colors duration-300">
              RRAG
              <img src="img/revenge.jpg" alt="Revenge" className="absolute hidden group-hover:block w-32 top-[-150px] left-1/2 transform -translate-x-1/2" />
            </span>

          </p>
        </div>
        <h1 className="text-2xl mt-8 font-secondary text-third">More To Be Announced</h1>
      </div>
    </section>
  );
};

export default NextSection;