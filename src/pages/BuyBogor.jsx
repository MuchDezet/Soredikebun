// src/BuyBogor.jsx
import React, { useState, useRef, useEffect } from "react";
import PaymentSummary from "../components/PaymentSummary";

const BuyBogor = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    identityCardNumber: "",
    phone: "",
    email: "",
    domisili: "",
    dateOfBirth: "",
    gender: "",
  });

  const [dateFieldFocused, setDateFieldFocused] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [ticketQuantityVIP, setTicketQuantityVIP] = useState(0);
  const [ticketQuantityEarlyBird, setTicketQuantityEarlyBird] = useState(0);
  const ticketPrices = {
    "VIP Day 2": 425000,
    "2 Days Pass - Early Bird": 757000,
  };
  const maxTickets = 5;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "dateOfBirth" && value) {
      const [year, month, day] = value.split("-");
      const formattedDate = `${day}/${month}/${year}`;
      setFormData((prevState) => ({
        ...prevState,
        [name]: formattedDate,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleVoucherChange = (e) => {
    setVoucherCode(e.target.value);
  };

  const handlePaymentChange = (value) => {
    setPaymentMethod(value);
    setSelectedOption("");
    setIsDropdownOpen(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleIncreaseVIP = () => {
    if (ticketQuantityVIP < maxTickets) {
      setTicketQuantityVIP(ticketQuantityVIP + 1);
    }
  };

  const handleDecreaseVIP = () => {
    if (ticketQuantityVIP > 0) {
      setTicketQuantityVIP(ticketQuantityVIP - 1);
    }
  };

  const handleIncreaseEarlyBird = () => {
    if (ticketQuantityEarlyBird < maxTickets) {
      setTicketQuantityEarlyBird(ticketQuantityEarlyBird + 1);
    }
  };

  const handleDecreaseEarlyBird = () => {
    if (ticketQuantityEarlyBird > 0) {
      setTicketQuantityEarlyBird(ticketQuantityEarlyBird - 1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const virtualAccountBanks = [
    { name: "briva", colorLogo: "img/bank/briva-pay.webp", grayLogo: "img/bank/briva-pay.webp" },
    { name: "bca", colorLogo: "img/bank/bca-pay.webp", grayLogo: "img/bank/bca-pay.webp" },
    { name: "mandiri", colorLogo: "img/bank/mandiri-pay.webp", grayLogo: "img/bank/mandiri-pay.webp" },
    { name: "bni", colorLogo: "img/bank/bni-pay.webp", grayLogo: "img/bank/bni-pay.webp" },
    { name: "permata", colorLogo: "img/bank/permata-pay.webp", grayLogo: "img/bank/permata-pay.webp" },
  ];

  const eWalletOptions = [
    { name: "OVO", colorLogo: "https://via.placeholder.com/50x30?text=OVO+Color", grayLogo: "https://via.placeholder.com/50x30?text=OVO+Gray" },
    { name: "GoPay", colorLogo: "https://via.placeholder.com/50x30?text=GoPay+Color", grayLogo: "https://via.placeholder.com/50x30?text=GoPay+Gray" },
    { name: "Dana", colorLogo: "https://via.placeholder.com/50x30?text=Dana+Color", grayLogo: "https://via.placeholder.com/50x30?text=Dana+Gray" },
  ];

  const creditCardOptions = [
    { name: "Visa", colorLogo: "https://via.placeholder.com/50x30?text=Visa+Color", grayLogo: "https://via.placeholder.com/50x30?text=Visa+Gray" },
    { name: "MasterCard", colorLogo: "https://via.placeholder.com/50x30?text=MasterCard+Color", grayLogo: "https://via.placeholder.com/50x30?text=MasterCard+Gray" },
    { name: "Amex", colorLogo: "https://via.placeholder.com/50x30?text=Amex+Color", grayLogo: "https://via.placeholder.com/50x30?text=Amex+Gray" },
  ];

  const qrisOptions = [
    { name: "QRIS", colorLogo: "https://via.placeholder.com/50x30?text=QRIS+Color", grayLogo: "https://via.placeholder.com/50x30?text=QRIS+Gray" },
  ];

  const getTotalPrice = () => {
    const totalVIP = ticketPrices["VIP Day 2"] * ticketQuantityVIP;
    const totalEarlyBird = ticketPrices["2 Days Pass - Early Bird"] * ticketQuantityEarlyBird;
    return totalVIP + totalEarlyBird;
  };

  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-primary p-6">
      <div className="flex w-full max-w-7xl mx-auto mt-10 gap-12">
        <div className="w-1/2 flex flex-col">
          <div className="bg-pink-100 rounded-xl shadow-md p-6 mb-4">
            <h2 className="text-4xl font-semibold mb-4 text-center opacity-30">Ticket Category</h2>
            <div className="relative">
              <div className="text-third mb-2 opacity-35">
                <p>2 Days Pass - Early Bird</p>
                <p className="font-bold">Rp757,000</p>
              </div>
              <div className="absolute top-0 right-0 transform translate-x-1/14 -translate-y-1/2">
                <img
                  src="img/soldout.webp"
                  alt="Sold Out Stamp"
                  className="w-70 h-auto transform rotate-[-1deg] opacity-30 z-[-1]"
                />
              </div>
            </div>
            <div className="bg-pink-800 p-3 rounded mt-4 text-sm text-white opacity-60">
              <p>
                Include: 1x tiket Daily Pass Reguler Sunset di Kebun, 1x tiket masuk
                perorangan lokasi acara, tiket tidak dapat dipindah tangankan
              </p>
            </div>
          </div>

          <div className="bg-pink-100 rounded-xl shadow-md p-6 mb-4">
            <div className="relative flex justify-between items-center">
              <div className="text-third mb-2">
                <p>VIP Day 2</p>
                <p className="font-bold">Rp425,000</p>
              </div>
              <div className="flex items-center border border-gray-300 rounded-full">
                <button
                  onClick={handleDecreaseVIP}
                  className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-l-full"
                  disabled={ticketQuantityVIP === 0}
                >
                  -
                </button>
                <span className="px-4 py-1">{ticketQuantityVIP}</span>
                <button
                  onClick={handleIncreaseVIP}
                  className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-r-full"
                  disabled={ticketQuantityVIP === maxTickets}
                >
                  +
                </button>
              </div>
            </div>
            <p className="mt-2 text-gray-700 text-right">
              Total: Rp{(ticketPrices["VIP Day 2"] * ticketQuantityVIP).toLocaleString()}
            </p>
            <div className="bg-pink-800 p-3 rounded mt-4 text-sm text-white">
              <p>
                Include: 1x tiket Daily Pass Reguler Sunset di Kebun, 1x tiket masuk
                perorangan lokasi acara, tiket tidak dapat dipindah tangankan
              </p>
            </div>
          </div>

          <div className="bg-pink-100 rounded-xl shadow-md p-6 mb-20">
            <div className="relative flex justify-between items-center">
              <div className="text-third mb-2">
                <p>2 Days Pass - Early Bird</p>
                <p className="font-bold">Rp757,000</p>
              </div>
              <div className="flex items-center border border-gray-300 rounded-full">
                <button
                  onClick={handleDecreaseEarlyBird}
                  className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-l-full"
                  disabled={ticketQuantityEarlyBird === 0}
                >
                  -
                </button>
                <span className="px-4 py-1">{ticketQuantityEarlyBird}</span>
                <button
                  onClick={handleIncreaseEarlyBird}
                  className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-r-full"
                  disabled={ticketQuantityEarlyBird === maxTickets}
                >
                  +
                </button>
              </div>
            </div>
            <p className="mt-2 text-gray-700 text-right">
              Total: Rp{(ticketPrices["2 Days Pass - Early Bird"] * ticketQuantityEarlyBird).toLocaleString()}
            </p>
            <div className="bg-pink-800 p-3 rounded mt-4 text-sm text-white">
              <p>
                Include: 1x tiket Daily Pass Reguler Sunset di Kebun, 1x tiket masuk
                perorangan lokasi acara, tiket tidak dapat dipindah tangankan
              </p>
            </div>
          </div>

          <div className="bg-pink-100 rounded-xl shadow-md p-6">
            <h2 className="text-3xl text-third font-semibold mb-6">Registration Details</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-third font-semibold">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-third rounded"
                />
                <p className="text-sm text-third">Match with identity card</p>
              </div>
              <div className="space-y-2">
                <label className="block text-third font-semibold">Identity Card Number</label>
                <input
                  type="text"
                  name="identityCardNumber"
                  value={formData.identityCardNumber}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-third rounded"
                />
                <p className="text-sm text-third">KTP/SIM/Kitas/Student Card</p>
              </div>
              <div className="space-y-2">
                <label className="block text-third font-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-third rounded"
                />
                <p className="text-sm text-third">Linked with WhatsApp account</p>
              </div>
              <div className="space-y-2">
                <label className="block text-third font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-third rounded"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-third font-semibold">Domisili</label>
                <select
                  name="domisili"
                  value={formData.domisili}
                  onChange={handleChange}
                  className="w-full p-2 border-2 border-third rounded text-third"
                >
                  <option value="">Please select one:</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="surabaya">Surabaya</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-third font-semibold">Date of Birth</label>
                <div className="relative">
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth.split("/").reverse().join("-")}
                    onChange={handleChange}
                    onFocus={() => setDateFieldFocused(true)}
                    onBlur={() => setDateFieldFocused(false)}
                    min="1900-01-01"
                    max="1980-12-31"
                    className={`w-full p-2 rounded transition-all duration-200 border-2 ${
                      dateFieldFocused ? "border-yellow-400 bg-yellow-50" : "border-third text-third"
                    }`}
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2"
                    onClick={() => document.getElementsByName("dateOfBirth")[0].showPicker()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-third">Gender</label>
                <div className="flex space-x-6">
                  <label className="flex items-center text-third">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="flex items-center text-third">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Female
                  </label>
                </div>
                <button className="mt-8 bg-pink-400 text-white font-bold py-2 px-25 rounded-full mx-auto block hover:bg-pink-500 transition-colors">Register</button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-1/2 flex flex-col space-y-6">
          <div className="pl-1">
            <img
              src="/img/program/bogor.jpg"
              alt="Event Poster"
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </div>

          <div className="pl-10 bg-pink-100 rounded-xl shadow-md p-6">
            <div className="space-y-4">
              <PaymentSummary
                getTotalPrice={getTotalPrice}
                voucherCode={voucherCode}
                handleVoucherChange={handleVoucherChange}
              />
              <div className="text-third font-semibold">Pay with:</div>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="w-full p-2 border-2 border-third rounded bg-blue-10 flex justify-between items-center focus:outline-none"
                >
                  <span>{paymentMethod || "Select Payment Method"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-third"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 transition-all duration-300 ease-in-out transform origin-top scale-y-100 opacity-100">
                    <button
                      onClick={() => handlePaymentChange("virtual-account")}
                      className="w-full text-left p-2 hover:bg-gray-100"
                    >
                      Virtual Account
                    </button>
                    <button
                      onClick={() => handlePaymentChange("ewallet")}
                      className="w-full text-left p-2 hover:bg-gray-100"
                    >
                      eWallet
                    </button>
                    <button
                      onClick={() => handlePaymentChange("credit")}
                      className="w-full text-left p-2 hover:bg-gray-100"
                    >
                      Credit Card or Pay Later
                    </button>
                    <button
                      onClick={() => handlePaymentChange("qris")}
                      className="w-full text-left p-2 hover:bg-gray-100"
                    >
                      QRIS
                    </button>
                  </div>
                )}
              </div>
              {paymentMethod && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {paymentMethod === "virtual-account" &&
                    virtualAccountBanks.map((bank) => (
                      <button
                        key={bank.name}
                        onClick={() => handleOptionSelect(bank.name)}
                        className={`flex items-center justify-center p-4 border rounded-lg shadow-md ${
                          selectedOption === bank.name ? "bg-blue-50 border-blue-300" : "bg-gray-50"
                        }`}
                      >
                        <img
                          src={selectedOption === bank.name ? bank.colorLogo : bank.grayLogo}
                          alt={bank.name}
                          className="h-8 w-auto"
                        />
                      </button>
                    ))}
                  {paymentMethod === "ewallet" &&
                    eWalletOptions.map((option) => (
                      <button
                        key={option.name}
                        onClick={() => handleOptionSelect(option.name)}
                        className={`flex items-center justify-center p-4 border rounded-lg shadow-md ${
                          selectedOption === option.name ? "bg-blue-50 border-blue-300" : "bg-gray-50"
                        }`}
                      >
                        <img
                          src={selectedOption === option.name ? option.colorLogo : option.grayLogo}
                          alt={option.name}
                          className="h-8 w-auto mr-2"
                        />
                        <span>{option.name}</span>
                      </button>
                    ))}
                  {paymentMethod === "credit" &&
                    creditCardOptions.map((option) => (
                      <button
                        key={option.name}
                        onClick={() => handleOptionSelect(option.name)}
                        className={`flex items-center justify-center p-4 border rounded-lg shadow-md ${
                          selectedOption === option.name ? "bg-blue-50 border-blue-300" : "bg-gray-50"
                        }`}
                      >
                        <img
                          src={selectedOption === option.name ? option.colorLogo : option.grayLogo}
                          alt={option.name}
                          className="h-8 w-auto mr-2"
                        />
                        <span>{option.name}</span>
                      </button>
                    ))}
                  {paymentMethod === "qris" &&
                    qrisOptions.map((option) => (
                      <button
                        key={option.name}
                        onClick={() => handleOptionSelect(option.name)}
                        className={`flex items-center justify-center p-4 border rounded-lg shadow-md ${
                          selectedOption === option.name ? "bg-blue-50 border-blue-300" : "bg-gray-50"
                        }`}
                      >
                        <img
                          src={selectedOption === option.name ? option.colorLogo : option.grayLogo}
                          alt={option.name}
                          className="h-8 w-auto mr-2"
                        />
                        <span>{option.name}</span>
                      </button>
                    ))}
                </div>
              )}
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600 text-sm">
                  Dengan menggunakan website ini, membeli tiket, atau membuat akun, Anda setuju
                  dengan{" "}
                  <a href="#" className="text-red-600 underline">
                    Syarat Layanan & Kebijakan Privasi
                  </a>
                </span>
              </div>
              <button className="w-full bg-pink-400 text-white p-2 rounded-lg mt-4">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyBogor;