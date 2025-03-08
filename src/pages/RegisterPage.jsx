import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [region, setRegion] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = (field) => {
    if (field === 'password') setShowPassword(!showPassword);
    if (field === 'confirmPassword') setShowConfirmPassword(!showConfirmPassword);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !idNumber || !email || !phone || !birthDay || !region || !gender || !password || !confirmPassword) {
      setNotification('Please fill in all fields before registering.');
      setTimeout(() => setNotification(''), 3000); // Hilangkan notifikasi setelah 3 detik
      return;
    }
    if (password !== confirmPassword) {
      setNotification('Passwords do not match.');
      setTimeout(() => setNotification(''), 3000);
      return;
    }
    // Logika registrasi di sini (misalnya API call)
    console.log('Registration submitted:', { name, idNumber, email, phone, birthDay, region, gender, password, confirmPassword });
    setNotification('Registration successful!'); // Contoh notifikasi sukses
    setTimeout(() => setNotification(''), 3000);
  };

  const isFormValid = !name || !idNumber || !email || !phone || !birthDay || !region || !gender || !password || !confirmPassword;

  return (
    <div className="min-h-screen bg-cyan-300 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Corner decorations */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-900 rounded-tr-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-900 rounded-tl-full z-0"></div>

      <div className="w-full max-w-2xl z-10">
        {/* Logo - Enhanced with additional content */}
        <div className="flex flex-col items-center mb-5">
          <div className="w-56 h-20 rounded-lg flex items-center justify-center">
            <img 
              src="img/PUTIH.png" 
              alt="Sunset di Kebun" 
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[#4A192C] text-center mt-2 font-[Caesar_Dressing] text-lg">
            Welcome to Sunset di Kebun - Your Journey Begins Here!
          </p>
          <p className="text-purple-900 text-sm text-center">
            Register now to unlock exclusive features and personalized experiences.
          </p>
        </div>

        {/* Mascot - Enhanced with additional content */}
        <div className="flex flex-col items-center my-8">
          <div className="w-40 h-40 rounded-full flex items-center justify-center">
            <img 
              src="img/maskot.png" 
              alt="Sunset Mascot" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Sign Up Text */}
        <h1 className="text-4xl font-bold text-[#4A192C] uppercase tracking-wider text-center mb-8 font-[Caesar_Dressing]">
          Sign Up
        </h1>

        {/* Login Link */}
        <div className="text-center text-[#4A192C] mb-6">
          <span>Already have an account? </span>
          <span 
            className="text-purple-900 font-bold hover:text-yellow-300 transition-colors cursor-pointer"
            onClick={handleLoginClick}
          >
            Login
          </span>
        </div>

        {/* Notification */}
        {notification && (
          <div className="text-center mb-4 text-red-500 font-bold">
            {notification}
          </div>
        )}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="block text-[#4A192C] text-lg font-[Caesar_Dressing]">
                Name*
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-full text-purple-900 placeholder-purple-900 border-2 border-pink-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="idNumber" className="block text-[#4A192C] text-lg font-[Caesar_Dressing]">
                No. KTP/SIM/Kitas*
              </label>
              <input
                type="text"
                id="idNumber"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                placeholder="No. KTP/SIM/Kitas/Student Card"
                className="w-full px-4 py-3 rounded-full text-purple-900 placeholder-purple-900 border-2 border-pink-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block text-[#4A192C] text-lg font-[Caesar_Dressing]">
                Email*
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-full text-purple-900 placeholder-purple-900 border-2 border-pink-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="phone" className="block text-[#4A192C] text-lg font-[Caesar_Dressing]">
                No. Handphone*
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="No. Handphone (WhatsApp)"
                className="w-full px-4 py-3 rounded-full text-purple-900 placeholder-purple-900 border-2 border-pink-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="birthDay" className="block text-[#4A192C] text-lg font-[Caesar_Dressing]">
                Your Birth Day*
              </label>
              <input
                type="date"
                id="birthDay"
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value)}
                className="w-full px-4 py-3 rounded-full text-purple-900 placeholder-purple-900 border-2 border-pink-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="region" className="block text-[#4A192C] text-lg font-[Caesar_Dressing]">
                Regional
              </label>
              <select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-4 py-3 rounded-full text-purple-900 border-2 border-pink-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                <option value="">Select regional...</option>
                <option value="jakarta">Jakarta</option>
                <option value="bandung">Bandung</option>
                <option value="surabaya">Surabaya</option>
                <option value="medan">Medan</option>
                <option value="semarang">Semarang</option>
                <option value="palembang">Palembang</option>
                <option value="makassar">Makassar</option>
                <option value="depok">Depok</option>
                <option value="bogor">Bogor</option>
                <option value="tangerang">Tangerang</option>
                <option value="bekasi">Bekasi</option>
                <option value="malang">Malang</option>
                <option value="yogyakarta">Yogyakarta</option>
                <option value="padang">Padang</option>
                <option value="denpasar">Denpasar</option>
                <option value="samarinda">Samarinda</option>
                <option value="pontianak">Pontianak</option>
                <option value="banjarmasin">Banjarmasin</option>
                <option value="pekanbaru">Pekanbaru</option>
                <option value="manado">Manado</option>
                <option value="batam">Batam</option>
                <option value="cirebon">Cirebon</option>
                <option value="solo">Solo</option>
                <option value="serang">Serang</option>
                <option value="kupang">Kupang</option>
                <option value="ambon">Ambon</option>
                <option value="jayapura">Jayapura</option>
                <option value="mataram">Mataram</option>
                <option value="kediri">Kediri</option>
                <option value="tasikmalaya">Tasikmalaya</option>
                <option value="palu">Palu</option>
                <option value="tanjungpinang">Tanjung Pinang</option>
                <option value="gunungsitoli">Gunungsitoli</option>
                <option value="bandaaceh">Banda Aceh</option>
                <option value="banjarbaru">Banjarbaru</option>
                <option value="bengkulu">Bengkulu</option>
                <option value="ternate">Ternate</option>
                <option value="tarakan">Tarakan</option>
                <option value="gorontalo">Gorontalo</option>
                <option value="palangkaraya">Palangkaraya</option>
                <option value="sukabumi">Sukabumi</option>
                <option value="tegal">Tegal</option>
                <option value="cilacap">Cilacap</option>
                <option value="magelang">Magelang</option>
                <option value="purwokerto">Purwokerto</option>
                <option value="probolinggo">Probolinggo</option>
                <option value="pasuruan">Pasuruan</option>
                <option value="lumajang">Lumajang</option>
                <option value="jember">Jember</option>
                <option value="blitar">Blitar</option>
                <option value="mojokerto">Mojokerto</option>
                <option value="bondowoso">Bondowoso</option>
                <option value="sidoarjo">Sidoarjo</option>
                <option value="nganjuk">Nganjuk</option>
                <option value="bojonegoro">Bojonegoro</option>
                <option value="pamekasan">Pamekasan</option>
                <option value="sumenep">Sumenep</option>
                <option value="madiun">Madiun</option>
                <option value="trenggalek">Trenggalek</option>
                <option value="tulungagung">Tulungagung</option>
                <option value="kediri">Kediri</option>
                <option value="batang">Batang</option>
                <option value="brebes">Brebes</option>
                <option value="pemalang">Pemalang</option>
                <option value="kendal">Kendal</option>
                <option value="jepara">Jepara</option>
                <option value="pati">Pati</option>
                <option value="kudus">Kudus</option>
                <option value="demak">Demak</option>
                <option value="blora">Blora</option>
                <option value="rembang">Rembang</option>
                <option value="wonosobo">Wonosobo</option>
                <option value="purworejo">Purworejo</option>
                <option value="banyumas">Banyumas</option>
                <option value="karanganyar">Karanganyar</option>
                <option value="wonogiri">Wonogiri</option>
                <option value="sragen">Sragen</option>
                <option value="klaten">Klaten</option>
                <option value="boyolali">Boyolali</option>
                <option value="sleman">Sleman</option>
                <option value="bantul">Bantul</option>
                <option value="gunungkidul">Gunungkidul</option>
                <option value="kulonprogo">Kulon Progo</option>
                <option value="lampung">Lampung</option>
                <option value="jambi">Jambi</option>
                <option value="pangkalpinang">Pangkalpinang</option>
                <option value="tanjungbalai">Tanjung Balai</option>
                <option value="dumai">Dumai</option>
                <option value="lubuklinggau">Lubuklinggau</option>
                <option value="prabumulih">Prabumulih</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="password" className="block text-[#4A192C] text-lg font-[Caesar_Dressing]">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-full text-purple-900 placeholder-purple-900 border-2 border-pink-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('password')}
                  className="absolute right-4 top-3 text-pink-500 hover:text-purple-900 transition-colors"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="gender" className="block text-[#4A192C] text-lg font-[Caesar_Dressing]">
                Gender*
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2 hidden"
                  />
                  <span
                    onClick={() => setGender('male')}
                    className={`cursor-pointer px-4 py-2 rounded-full border-2 font-semibold text-base transition-all duration-300 ${
                      gender === 'male'
                        ? 'bg-gradient-to-r from-purple-800 to-pink-600 text-white border-transparent shadow-inner'
                        : 'bg-white text-purple-900 border-pink-400 hover:bg-gradient-to-r hover:from-pink-100 hover:to-white'
                    }`}
                  >
                    Male
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2 hidden"
                  />
                  <span
                    onClick={() => setGender('female')}
                    className={`cursor-pointer px-4 py-2 rounded-full border-2 font-semibold text-base transition-all duration-300 ${
                      gender === 'female'
                        ? 'bg-gradient-to-r from-purple-800 to-pink-600 text-white border-transparent shadow-inner'
                        : 'bg-white text-purple-900 border-pink-400 hover:bg-gradient-to-r hover:from-pink-100 hover:to-white'
                    }`}
                  >
                    Female
                  </span>
                </label>
              </div>
              {/* Gombalan berdasarkan gender */}
              {gender === 'male' && (
                <p className="text-purple-900 text-sm mt-2 italic">
                  "Kamu seperti matahari terbenam, selalu bikin hati ini hangat dan takjub!"
                </p>
              )}
              {gender === 'female' && (
                <p className="text-purple-900 text-sm mt-2 italic">
                  "Kamu seperti bunga di kebun senja, cantiknya bikin hati bergetar!"
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="confirmPassword" className="block text-[#4A192C] text-lg font-[Caesar_Dressing]">
                Password Confirmation*
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Password Confirmation"
                  className="w-full px-4 py-3 rounded-full text-purple-900 placeholder-purple-900 border-2 border-pink-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                  className="absolute right-4 top-3 text-pink-500 hover:text-purple-900 transition-colors"
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
          </div>

          <p className="text-[#4A192C] text-sm text-center mb-4">
            *E-ticket akan dikirimkan melalui WhatsApp
          </p>

          <button
            type="submit"
            className="w-full bg-pink-500 text-[#4A192C] font-bold py-3 px-4 rounded-full uppercase font-[Caesar_Dressing] hover:bg-pink-400 transition-colors shadow-lg"
            disabled={isFormValid} // Disable jika form tidak valid
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;