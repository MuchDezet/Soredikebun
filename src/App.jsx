import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Loader from './components/Loader.jsx';
import Hero from './components/Hero.jsx';
import NextSection from './components/NextSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import Playlist from './components/Playlist.jsx';
import NewsSection from './components/NewsSection.jsx';
import March from './components/March.jsx';
import ColorfulSection from './components/ColorfulSection.jsx';
import BackgroundSection from './components/BackgroundSection.jsx';
import Footer from './components/Footer.jsx';
import ProgramCard from './pages/ProgramCard.jsx';
import HamburgerMenu from './components/HamburgerMenu.jsx';
import TicketMenu from './components/TicketMenu.jsx';
import MerchandiseShowcase from './pages/MerchandiseShowcase.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import BuyJakarta from './pages/BuyJakarta.jsx';
import BuyBogor from './pages/BuyBogor.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import './index.css';

// Komponen Home
const Home = () => {
  console.log("Rendering Home"); // Debugging
  return (
    <>
      <Hero />
      <NextSection />
      <GallerySection />
      <Playlist />
      <NewsSection />
      <March />
      <ColorfulSection />
      <BackgroundSection />
      <Footer />
    </>
  );
};

// Komponen utama App
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Untuk redirect jika URL salah

  useEffect(() => {
    // Simulasi loading selama 1,5 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Redirect ke '/' jika URL awal tidak valid
    if (!isLoading && window.location.pathname === '' || window.location.pathname === '/index.html') {
      navigate('/');
    }
  }, [isLoading, navigate]);

  console.log("Current URL:", window.location.pathname); // Debugging

  return (
    <div className="min-h-screen relative overflow-x-hidden overflow-y-hidden">
      <HamburgerMenu />
      <TicketMenu />
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<ProgramCard />} />
          <Route path="/sunset-store" element={<MerchandiseShowcase />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/buy-jakarta" element={<BuyJakarta />} />
          <Route path="/buy-bogor" element={<BuyBogor />} />
          <Route path="/gallery-more" element={<NotFoundPage />} />
          <Route path="/march-more" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </div>
  );
};

// Wrap App dengan Router di luar
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;