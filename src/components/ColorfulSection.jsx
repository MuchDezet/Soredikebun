// src/components/MinimalSection.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 
import { LuPhoneCall } from "react-icons/lu";

const ColorfulSection = () => {
  const [isOverlayOpen, setIsOverlayOpen] = React.useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <>
      {/* Section utama dengan tombol Contact Us */}
      <section className="flex flex-col items-center justify-center min-h-fit bg-gradient-to-b from-white to-white m-[-1px] p-3">
        <button
          className="bg-teal-500 text-white px-30 py-2 rounded-full hover:bg-teal-600"
          onClick={toggleOverlay}
        >
          Contact Us
        </button>
        <h1 className="text-lg text-gray-800 mt-2 underline decoration-wavy decoration-purple-500">
          For sponsorship opportunities.
        </h1>
      </section>

      {/* Overlay dengan card */}
      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-primary to-white rounded-lg p-8 relative w-11/12 max-w-xl min-h-[60vh]">
            {/* Tombol close */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
              onClick={toggleOverlay}
            >
              ✕
            </button>

            {/* Konten card */}
            <div className="flex flex-col items-center h-full justify-center">
              {/* Teks "Let's Chat" */}
              <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-6 shadow-black/900">
                'HI' 
              </h2>

              {/* Gambar maskot */}
              <img
                src="img/program/papio.png"
                alt="Mascot"
                className="w-full max-w-sm mb-6" // Besarkan gambar dari max-w-xs ke max-w-sm
              />

              {/* Tombol WhatsApp */}
              <div className="flex gap-6 mt-6">
                <a
                  href="https://wa.me/+6281315081316?text=Halo%20Muchamad,%20saya%20tertarik%20dengan%20sponsorship!" // Ganti dengan nomor WhatsApp Desiana
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 text-white px-8 py-3 rounded-full flex items-center gap-3 hover:bg-pink-600 text-lg"
                >
                  <FaWhatsapp className="text-2xl" /> {/* Besarkan ikon */}
                  Muchamad
                </a>
                <a
                  href="tel:+6281234567890" // Ganti dengan nomor WhatsApp Andra
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 text-white px-8 py-3 rounded-full flex items-center gap-3 hover:bg-pink-600 text-lg"
                >
                  <LuPhoneCall className="text-2xl" /> {/* Besarkan ikon */}
                  Muchamad
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ColorfulSection;