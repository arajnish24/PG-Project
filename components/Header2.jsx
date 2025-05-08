import { useState } from 'react';
import { Phone, ChevronDown, ChevronUp, Menu } from 'lucide-react';

const Header2 = () => {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [message, setMessage] = useState("");

  const countries = [
    "India", "USA", "Canada", "Australia", "Germany"
  ];
  const countryStates = {
    India: [
      "New Delhi", "Assam", "Bihar", "Madhya Pradesh", "Mumbai", 
      "Rajasthan", "Jharkhand", "Uttar Pradesh", "Punjab", "Haryana", "Gujarat", "Uttarakhand"
    ],
    USA: [
      "California", "Texas", "New York"
    ],
    Canada: [
      "Ontario", "Quebec", "Alberta"
    ],
    Australia: [
      "Victoria", "Queensland", "Tasmania"
    ],
    Germany: [
      "Berlin", "Bavaria", "Hamburg"
    ]
  };

  const resetAll = () => {
    setShowCountryDropdown(false);
    setShowStateDropdown(false);
    setSelectedCountry(null);
    setSelectedState(null);
    setMessage("");
  };

  const toggleCountryDropdown = () => {
    setShowCountryDropdown(!showCountryDropdown);
    setShowStateDropdown(false);
    setMessage("");
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setSelectedState(null);
    setShowCountryDropdown(false);
    setShowStateDropdown(true);
    setMessage("");
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
    let popupMessage = "";

    if (selectedCountry === "India") {
      popupMessage = `✅ You selected: India → ${state}`;
      setMessage(popupMessage);
    } else {
      popupMessage = `Service not available !`;
      setMessage("⚠️ Currently not available.");
    }

    setTimeout(() => {
      alert(popupMessage);
      resetAll();
    }, 100);
  };

  return (
    <> 
      {/* Top Header */}
      <header className="w-full bg-[#01487d] text-white py-2 px-3 flex items-center 
        justify-between bg-gradient-to-r from-lightgreen-500 to-red-400">

        {/* Logo */}

        <div className="flex items-center gap-2 ml-8">
          <div className="text-2xl font-bold flex items-center gap-2">
            {/* <span className="text-white">🏠</span> */}

            {/* Logo Image */}

            <img
              src="/logo8.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-30 h-13 "
            />

          </div>
          <span className="text-sm text-lime-400 ml-1 font-semibold">Live Your Life Style</span>
        </div>

        {/* Navigation */}

        <nav className="hidden md:flex gap-6 font-medium text-white">
          <a href="#" className="hover:text-lime-300">Home</a>
          <a href="#" className="hover:text-lime-300">About</a>
          <a href="#" className="hover:text-lime-300">For PG Owners</a>
          <a href="#" className="hover:text-lime-300">Contact Us</a>
          <a href="#" className="hover:text-lime-300">Partner Us</a>
          <a href="#" className="hover:text-lime-300">Blog</a>
        </nav>

        {/* Phone */}
        <div className="flex items-center gap-2 bg-white text-black px-4 rounded-l-full mr-5">
          <div className="bg-sky-400 text-white p-2 rounded-full -ml-4">
            <Phone size={18} />
          </div>
          <span className="font-medium">+91-7903899365</span>
        </div>
      </header>

      {/* Region Selector */}
      <section className="bg-gradient-to-r from-white to-violet-400 px-1 py-2 font-bold">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-xl ml-6">Select Region</h2>

          {/* Country Selector */}

          <div>
            <button
              className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow mr-5"
              onClick={toggleCountryDropdown}
            >
              <Menu size={20} />
              <span className="text-lg">{selectedCountry || "Select Country"}</span>
              {
                showCountryDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {/* Country Dropdown */}

            {showCountryDropdown && (
              <div className="mt-2 bg-white rounded shadow-lg max-w-xs">
                <ul className="divide-y divide-gray-200">
                  {
                    countries.map((country) => (
                    <li
                      key={country}
                      onClick={() => handleCountryClick(country)}
                      className="px-4 py-2 hover:bg-violet-100 cursor-pointer"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* State Dropdown */}
          {showStateDropdown && selectedCountry && (
            <div className="mt-4 bg-white rounded shadow-lg max-w-xs">
              <ul className="divide-y divide-gray-200">
                {(countryStates[selectedCountry] || []).map((state) => (
                  <li
                    key={state}
                    onClick={() => handleStateClick(state)}
                    className="px-4 py-2 hover:bg-violet-100 cursor-pointer"
                  >
                    {state}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Message Output */}
        {message && (
          <div className="mt-6 text-lg text-red-700 ml-4">
            {message}
          </div>
        )}
      </section>
    </>
  );
};

export default Header2;
