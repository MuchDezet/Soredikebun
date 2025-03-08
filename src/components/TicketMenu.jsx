import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const TicketMenu = () => {
  const [isTicketMenuOpen, setIsTicketMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTicketMenu = () => {
    setIsTicketMenuOpen(!isTicketMenuOpen);
  };

  const ticketSidebarVariants = {
    hidden: { x: '100%', transition: { type: 'tween', duration: 0.3 } },
    visible: { x: 0, transition: { type: 'tween', duration: 0.3 } },
  };

  // Fungsi untuk menangani klik pada item "JAKARTA"
  const handleJakartaClick = () => {
    navigate('/buy-jakarta');
    setIsTicketMenuOpen(false);
  };

  // Fungsi untuk menangani klik pada item "BOGOR"
  const handleBogorClick = () => {
    navigate('/buy-bogor');
    setIsTicketMenuOpen(false);
  };

  return (
    <>
      {/* Tickets Button - Hanya muncul jika menu ticket tertutup dan halaman discroll */}
      {!isTicketMenuOpen && isScrolled && (
        <div
          className="ticket-button w-28 h-10 bg-yellow-400 rounded-lg flex items-center justify-center cursor-pointer fixed right-[-6px] top-10 z-50 shadow-md"
          onClick={toggleTicketMenu}
          style={{ position: 'fixed', top: '2.5rem' }}
        >
          <span className="text-pink-500 text-lg font-bold font-[Caesar_Dressing]">
            BUY TICKETS
          </span>
        </div>
      )}

      {/* Ticket Menu Sidebar */}
      <AnimatePresence>
        {isTicketMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={ticketSidebarVariants}
            className="fixed top-0 right-0 bottom-0 w-[45%] bg-pink-500 z-40 flex flex-col"
          >
            <motion.button
              whileHover={{ rotate: 15 }}
              className="absolute top-5 left-5 text-white text-xl"
              onClick={toggleTicketMenu}
            >
              <IoClose className="w-8 h-8" />
            </motion.button>
            <nav className="space-y-4 text-center mt-20 px-5">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
                className="bg-yellow-400 text-pink-500 rounded-full py-1 px-12 inline-block cursor-pointer group"
              >
                <span className="text-lg font-bold font-[Caesar_Dressing] gap-2 group-hover:text-white transition-colors duration-300">
                  BUY TICKETS
                </span>
              </motion.div>
              {['JAKARTA', 'BOGOR', 'CIBODAS', 'RAMADAN DI KEBUN'].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, color: '#fff7' }}
                  className="text-white text-xl py-2 cursor-pointer group relative font-bold font-[Caesar_Dressing]"
                  onClick={
                    item === 'JAKARTA'
                      ? handleJakartaClick
                      : item === 'BOGOR'
                      ? handleBogorClick
                      : undefined
                  }
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TicketMenu;