import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false); // State untuk submenu
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProgramClick = () => {
    navigate('/program');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleStoreClick = () => {
    navigate('/sunset-store');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSignInClick = () => {
    navigate('/login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleSubmission = (e) => {
    e.stopPropagation(); // Mencegah event click mengaktifkan toggleMenu
    setIsSubmissionOpen(!isSubmissionOpen);
  };

  const sidebarVariants = {
    hidden: { x: '-100%', transition: { type: 'tween', duration: 0.3 } },
    visible: { x: 0, transition: { type: 'tween', duration: 0.3 } },
  };

  const submenuVariants = {
    hidden: { opacity: 0, maxHeight: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    visible: { opacity: 1, maxHeight: '200px', transition: { duration: 0.3, ease: 'easeInOut' } }, // Batas maxHeight
  };

  return (
    <>
      {!isMenuOpen && (
        <div
          className="hamburger-menu w-18 h-10 bg-pink-500 rounded-lg flex items-center justify-center cursor-pointer fixed left-[-6px] top-10 z-50 shadow-md"
          onClick={toggleMenu}
          style={{ position: 'fixed', top: '2.5rem' }}
        >
          <img src="img/hamburger.png" alt="Menu" className="w-12 h-12 object-contain" />
        </div>
      )}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            className="fixed top-0 left-0 bottom-0 w-[45%] bg-pink-500 z-40 flex flex-col"
          >
            <motion.button
              whileHover={{ rotate: 15 }}
              className="absolute top-5 right-5 text-white text-xl"
              onClick={toggleMenu}
            >
              <IoClose className="w-8 h-8" />
            </motion.button>
            <nav className="space-y-4 text-center mt-20 px-5">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
                className="bg-white text-pink-500 rounded-full py-1 px-12 inline-block cursor-pointer group"
                onClick={handleSignInClick}
              >
                <span className="text-lg font-bold font-[Caesar_Dressing] gap-2 group-hover:text-yellow-400 transition-colors duration-300">
                  SIGN IN
                </span>
              </motion.div>
              {[
                { label: 'HOME', path: '/', onClick: () => { navigate('/'); setIsMenuOpen(false); } },
                { label: 'PROGRAM', path: '/program', onClick: handleProgramClick },
                { label: 'SUNSET STORE', path: '/sunset-store', onClick: handleStoreClick },
                { label: '★ SUBMISSION ★', path: '#', onClick: toggleSubmission }, // Toggle submenu
                { label: 'GALLERY', path: '#', onClick: toggleMenu },
                { label: 'NEWS', path: '#', onClick: toggleMenu },
                { label: 'INFORMATIONS', path: '#', onClick: toggleMenu },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, color: '#fff7' }}
                  className="text-white text-xl py-2 cursor-pointer group relative font-bold font-[Caesar_Dressing]"
                  onClick={item.onClick}
                >
                  {item.label}
                  {item.label === '★ SUBMISSION ★' && isSubmissionOpen && (
                    <AnimatePresence>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden" // Memastikan animasi penutupan
                        variants={submenuVariants}
                        className="mt-2 space-y-2 text-[#FFFF00] text-lg overflow-hidden" // Tambahkan overflow-hidden
                      >
                        {[
                          { label: 'EKSPOLORASI MUSIK', path: '/submission/eksplorasi-musik' },
                          { label: 'VOLUNTEER', path: '/submission/volunteer' },
                          { label: 'DOCUMENTATION CREW', path: '/submission/documentation-crew' },
                          { label: 'COLLABORATOR', path: '/submission/collaborator' },
                        ].map((subItem, subIndex) => (
                          <motion.div
                            key={subIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.1 }}
                            whileHover={{ scale: 1.03, color: '#FFFF00' }}
                            className="cursor-pointer py-1"
                            onClick={() => {
                              navigate(subItem.path);
                              setIsMenuOpen(false);
                              setIsSubmissionOpen(false);
                            }}
                          >
                            {subItem.label}
                          </motion.div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  )}
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

export default HamburgerMenu;