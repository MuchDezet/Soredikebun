const Hero = () => {
  return (
    <div className="hero-container relative h-screen flex items-center justify-start text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="videos/video.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay untuk meningkatkan readability */}
      <div className="absolute top-0 left-0 w-full h-full z-10"></div>

      {/* Blur Overlay di Bagian Bawah */}
      <div className="absolute bottom-0 left-0 w-full h-[20px] bg-gradient-to-t from-blue/50 to-transparent backdrop-blur-sm z-10 pointer-events-none"></div>
    </div>
  );
};

export default Hero;