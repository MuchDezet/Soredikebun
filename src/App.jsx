import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const Home = () => (
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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
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
    </Router>
  );
};

export default App;