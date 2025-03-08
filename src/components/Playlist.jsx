import React, { useState } from 'react';
import { FaGuitar, FaDrum } from 'react-icons/fa';
import { GiFlute, GiDrumKit } from 'react-icons/gi';
import { LuPiano } from 'react-icons/lu';
import { SlMusicTone } from 'react-icons/sl';
import { HiOutlineMusicNote } from 'react-icons/hi';

const Playlist = () => {
  const [playingTrackId, setPlayingTrackId] = useState(null);

  const playlistData = {
    title: "Sunset di Kebun 2025",
    creator: "Sunset di Kebun",
    coverImage: "img/playlist.png",
    tracks: [
      { id: 1, title: "Kekal", artist: "Nadin Amizah", duration: "04:40" },
      { id: 2, title: "Putih", artist: "Efek Rumah Kaca", duration: "09:46" },
      { id: 3, title: "Kita Pasti Tua", artist: "Fourtwnty", duration: "05:00" },
      { id: 4, title: "Menuju Senja", artist: "Payung Teduh", duration: "04:12" },
      { id: 5, title: "Berdua Saja", artist: "Hindia", duration: "03:47" },
      { id: 6, title: "Selalu Denganmu", artist: "Raisa", duration: "04:22" },
      { id: 7, title: "Pelangi", artist: "Hivi!", duration: "03:55" },
      { id: 8, title: "Terukir di Bintang", artist: "Sheila On 7", duration: "04:05" },
      { id: 9, title: "Seperti Rahim Ibu", artist: "Banda Neira", duration: "05:33" },
      { id: 10, title: "Tukar Jiwa", artist: "Dewa 19", duration: "06:12" },
      { id: 11, title: "Resah", artist: "Kafin Sulthan", duration: "03:27" },
      { id: 12, title: "Bertaut", artist: "Nadin Amizah", duration: "04:49" },
      { id: 13, title: "Bukan Rayuan Gombal", artist: "Judika", duration: "04:21" },
      { id: 14, title: "Ruang Rindu", artist: "Letto", duration: "04:56" },
      { id: 15, title: "Terlatih Patah Hati", artist: "The Rain", duration: "04:38" },
      { id: 16, title: "Melukis Senja", artist: "Budi Doremi", duration: "03:59" },
      { id: 17, title: "Jatuh Hati", artist: "Raisa", duration: "03:45" },
      { id: 18, title: "Lagu Untukmu", artist: "Virgoun", duration: "04:37" },
      { id: 19, title: "Seberapa Pantas", artist: "Sheila On 7", duration: "04:11" },
      { id: 20, title: "Zona Nyaman", artist: "Fourtwnty", duration: "05:18" },
      { id: 21, title: "Rumah Ke Rumah", artist: "Hindia", duration: "04:39" },
      { id: 22, title: "Menghapus Jejakmu", artist: "Peterpan", duration: "04:22" },
      { id: 23, title: "Kisah Sempurna", artist: "Mahalini", duration: "03:56" },
      { id: 24, title: "Kesaktianmu", artist: "Dewa 19", duration: "05:21" },
      { id: 25, title: "Bintang di Surga", artist: "Peterpan", duration: "04:34" },
      { id: 26, title: "Kala Cinta Menggoda", artist: "Chrisye", duration: "04:25" },
      { id: 27, title: "Bumi dan Bulan", artist: "The Rain", duration: "03:51" },
      { id: 28, title: "Hari Bersamanya", artist: "Sheila On 7", duration: "04:18" },
      { id: 29, title: "Sang Filsuf", artist: "Jason Ranti", duration: "05:37" },
    ],
  };

  const handleTrackClick = (trackId) => {
    if (playingTrackId === trackId) {
      setPlayingTrackId(null);
    } else {
      setPlayingTrackId(trackId);
    }
  };

  const handleSaveToSpotify = () => {
    window.open(
      'https://open.spotify.com/playlist/2v6UX7QjzTGKfgtxQHBG7a?go=1&sp_cid=34ae1f6e0cae22b64d81cbebb5d6119c&intent=1&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=020c7d27e75e4345',
      '_blank'
    );
  };

  return (
    <div className="bg-primary p-10 min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Animated Music Icons with Spread-Out Positions */}
      <FaGuitar className="absolute top-10 left-60 text-[#1DB954] text-5xl animate-hop" /> {/* Top-left */}
      <GiFlute className="absolute top-10 right-25 text-[#FF6F61] text-5xl animate-twirl" /> {/* Top-right */}
      <LuPiano className="absolute bottom-60 left-50 text-[#FFD700] text-5xl animate-sway" /> {/* Bottom-left */}
      <SlMusicTone className="absolute bottom-40 right-1/2 text-[#6A5ACD] text-4xl animate-boop" /> {/* Bottom-right */}
      <HiOutlineMusicNote className="absolute top-1/3 left-40 text-[#FF1493] text-6xl animate-wobble" /> {/* Mid-left */}
      <FaDrum className="absolute top-1/2 right-10 text-[#FF4500] text-5xl animate-bounce-drum" /> {/* Mid-right */}
      <GiDrumKit className="absolute top-10 left-1/2 transform -translate-x-1/2 text-[#00CED1] text-9xl animate-roll" /> {/* Top-center */}

      <h1 className="text-third text-4xl font-bold mb-6 z-10">Playlist</h1>
      <div className="w-full max-w-5xl bg-demp rounded-xl overflow-hidden shadow-lg z-10">
        {/* Header Section */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src={playlistData.coverImage}
              alt="Playlist cover"
              className="w-40 h-40 rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-white text-3xl font-bold">{playlistData.title}</h2>
              <div className="flex items-center gap-2 text-gray-400 mt-2">
                <span className="text-sm px-2 py-0.5 border border-gray-400 rounded-sm">Preview</span>
                <span>{playlistData.creator}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center p-2 gap-4">
            <button
              onClick={handleSaveToSpotify}
              className="flex items-center gap-2 text-gray-300 border border-gray-400 rounded-full px-3 py-2 hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span>Save on Spotify</span>
            </button>
            <div className="flex items-center gap-2">
              <button className="text-gray-400 p-2 hover:text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                </svg>
              </button>
              <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200">
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              <button className="text-gray-400 p-2 hover:text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Track List with Green Scrollbar */}
        <div className="bg-hint h-[190px] overflow-y-auto custom-scroll">
          {playlistData.tracks.map((track) => (
            <div
              key={track.id}
              className={`flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-[#1F3A4D] cursor-pointer ${
                playingTrackId === track.id ? 'bg-[#2A5C52]' : ''
              }`}
              onClick={() => handleTrackClick(track.id)}
            >
              <div className="flex items-center gap-4">
                <span className="text-primary w-5 text-center">{track.id}</span>
                <div className="w-6 flex justify-center">
                  {playingTrackId === track.id ? (
                    <svg className="w-5 h-5 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-primary opacity-10 group-hover:opacity-100"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
                <div>
                  <div className="font-medium text-white">{track.title}</div>
                  <div className="text-sm text-gray-400">{track.artist}</div>
                </div>
              </div>
              <div className="text-gray-400">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="flex items-center gap-2 mt-6 z-10">
        <svg className="w-8 h-8 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <p className="text-hint text-center text-lg max-w-lg">
          Tune into this playlist Sunset di Kebun 2025 and memorize the beats before the event kicks in!
        </p>
      </div>
      <div className="mt-30">
        <img src="img/1.gif" alt="" />
      </div>
    </div>
  );
};

export default Playlist;