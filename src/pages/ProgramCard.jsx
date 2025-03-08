import React from 'react';

const WavyLine = ({ color }) => {
  // Menentukan warna SVG berdasarkan parameter color
  let fillColor = "#6b46c1"; // default purple untuk "Musik"
  if (color === "text-green-700") {
    fillColor = "#047857"; // green untuk "Conservation"
  } else if (color === "text-blue-700") {
    fillColor = "#1d4ed8"; // blue untuk "Lestari"
  }
  
  return (
    <svg width="100" height="10" viewBox="0 0 100 10" className="mt-1">
      <path 
        d="M0,5 C10,0 15,10 25,5 C35,0 40,10 50,5 C60,0 65,10 75,5 C85,0 90,10 100,5" 
        fill="none" 
        stroke={fillColor} 
        strokeWidth="2" 
      />
    </svg>
  );
};

const ProgramCard = ({ image, title, color, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-3xl overflow-hidden w-80 h-80 mb-2 shadow-lg border-6 border-[#473C79]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className={`text-xl font-medium ${color}`}>{title}</h3>
        <WavyLine color={color} />
        <p className="mt-2 text-sm text-third max-w-xs">
          <span className="text-2xl font-serif text-third">"</span>
          {description}
          <span className="text-2xl font-serif text-third">"</span>
        </p>
      </div>
    </div>
  );
};

const ProgramCards = () => {
  const programs = [
    {
      image: "img/program/1.jpg",
      title: "Musik",
      color: "text-third",
      description: "Sunset di Kebun menghadirkan musik dengan suasana harmonis di alam terbuka serta keintiman antara musisi dengan penggemar menjadi nilai yang menjadi daya tarik tersendiri. Selain itu, terdapat juga program Eksplorasi Musik yang merupakan Ekspedisi Mencari Musisi Lokal Terbaik yang akan menjadi salah satu lineup Sunset di Kebun, sebagai upaya membangkitkan kembali bakal musisi yang bisa dikembangkan hingga hari ini."
    },
    {
      image: "img/program/2.jpg",
      title: "Conservation",
      color: "text-third",
      description: "Konservasi merupakan awal dari acara Sunset di Kebun yang bertujuan mengedukasi tentang pentingnya menjaga ekosistem. Program ini mengajak generasi muda untuk peduli pada flora, dan memperkenalkan serta mengedukasi penonton mengenai tanaman yang menjadi Plant Heroes pada setiap acara Sunset di Kebun. Sunset di Kebun mengangkat Jewel Orchid sebagai Plant Hero 2025 untuk mengenalkan tumbuhan anggrek endemik yang eksotis dan unik ini terhadap masyarakat luas, serta menekankan pentingnya melindungi spesies ini baik di alam maupun di konservasi secara ex situ."
    },
    {
      image: "img/program/3.jpg",
      title: "Lesstari",
      color: "text-third",
      description: "Lesstari merupakan program yang bertujuan untuk memperkenalkan tentang proses keberlanjutan yang bisa dimulai dari hal kecil. Melalui Lesstari, Sunset di Kebun mengajak penonton untuk meminimalkan dampak negatif dari sampah terhadap lingkungan."
    },
    {
      image: "img/program/4.jpg",
      title: "Kuliner Nusantara",
      color: "text-third",
      description: "Natura merupakan sebuah area yang mengajak #SunsetPeople untuk mengeksplorasi ruang hijau dengan bermain dan belajar di alam terbuka. Terdapat beragam kegiatan menarik, interaktif, edukatif dan kreatif yang akan menjadi pengalaman baru bagi #SunsetPeople diantaranya; Kelas Edukasi, Singing Plant, Warna-Warni, Rangkai Bunga, Merakit, Merajut, Membatik, dan Tutur Daur."
    },
    {
      image: "img/program/5.jpg",
      title: "Yoga di Alam",
      color: "text-third",
      description: "Kultura merupakan program budaya yang hadir sebagai cerminan dari persatuan dan keberagaman Indonesia. Kultura bertujuan untuk mengangkat, melestarikan serta memperkenalkan kekayaan dari Budaya Indonesia kepada #SunsetPeople. Kultura mengajak beberapa lapisan masyarakat seperti komunitas atau sanggar budaya untuk turut berpartisipasi dalam pelestarian budaya, karena budaya tidak akan bertahan tanpa peran aktif masyarakat."
    },
    {
      image: "img/program/6.jpg",
      title: "Seni Rupa",
      color: "text-third",
      description: "Sunset Market merupakan pasar kreatif dalam suatu area yang menjadi wadah guna meningkatkan kegiatan ekonomi kreatif dan sebagai sarana brand lokal untuk mengembangkan serta mengenalkan produk mereka di acara Sunset di Kebun."
    },
    {
      image: "img/program/7.jpg",
      title: "Fotografi Alam",
      color: "text-third",
      description: "Kids Corner merupakan area khusus anak-anak agar mereka dapat bermain, belajar, dan mengeksplorasi kreativitas di tengah kehangatan suasana Sunset di Kebun. Kids Corner memberikan ruang aman dan menyenangkan bagi anak-anak untuk menikmati momen mereka dalam bermain di alam terbuka dengan ditemani alunan musik."
    },
    {
      image: "img/program/8.jpg",
      title: "Kebun Edukasi",
      color: "text-third",
      description: "Stand Up Comedy merupakan pertunjukan stand up comedy yang menghadirkan komika-komika lokal dan nasional yang membawakan lelucon segar dan lucu, dengan suasana santai sambil menikmati udara segar dan pemandangan yang asri. Sunset di Kebun menyuguhkan momen untuk bersantai, tertawa, dan menggelitik yang cocok untuk semua kalangan."
    },
    {
      image: "img/program/9.jpg",
      title: "Teater Terbuka",
      color: "text-third",
      description: "Live Podcast merupakan program dengan tema talkshow bersama podcaster ternama yang akan membawakan obrolan seru dan lucu di alam terbuka. Suasana santai dan keindahan alam yang menenangkan, menjadikan Live Podcast sebagai acara untuk menikmati podcast dengan cara yang beda, dan penonton juga berkesempatan untuk berinteraksi dengan narasumber."
    },
    {
      image: "img/program/10.jpg",
      title: "Pasar Lokal",
      color: "text-third",
      description: "Paket Cinta adalah program unik yang memberikan pengalaman interaktif bagi #SunsetPeople untuk saling bertukar pesan berupa ungkapan, ucapan, pernyataan, atau perasaan yang ingin mereka sampaikan satu sama lain. Paket Cinta akan membantu dalam menyampaikan pesan dengan mekanisme yang sederhana, dan memoderasi pesan yang disampaikan tetap relevan, sopan, serta positif agar menjadi pengalaman yang menyenangkan bagi #SunsetPeople."
    }
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-primary min-h-screen">
      {/* Logo Sunset di Kebun (Image) */}
      <div className="mb-16 w-64">
        <img 
          src="img/logo.png" 
          alt="Sunset di Kebun Logo" 
          className="w-full"
        />
      </div>
      
      {/* Program Title dengan Flower Images */}
      <div className="flex items-center justify-center mb-12">
        <img 
          src="img/program/bunga.png" 
          alt="Flower Icon" 
          className="w-10 h-10"
        />
        <h2 className="mx-4 text-3xl font-bold text-third font-primary tracking-wider">PROGRAM</h2>
        <img 
          src="img/program/bunga.png" 
          alt="Flower Icon" 
          className="w-10 h-10"
        />
      </div>
      
      {/* Card Container */}
      <div className="w-full max-w-7xl">
        {/* Baris Pertama: 3 Card (Musik, Conservation, Lestari) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {programs.slice(0, 3).map((program, index) => (
            <ProgramCard 
              key={index}
              image={program.image} 
              title={program.title} 
              color={program.color} 
              description={program.description}
            />
          ))}
        </div>
        
        {/* Baris Berikutnya: Sisa Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.slice(3).map((program, index) => (
            <ProgramCard 
              key={index + 3} // Menambahkan offset pada key agar unik
              image={program.image} 
              title={program.title} 
              color={program.color} 
              description={program.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramCards;