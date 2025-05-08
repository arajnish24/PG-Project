"use client";
import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaCrosshairs } from "react-icons/fa";

const Header3 = () => {
  const [city, setCity] = useState("");
  const [pgs, setPgs] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`/api/searchPG?city=${encodeURIComponent(city)}`);
    const data = await res.json();
    setPgs(data.results);
  };

  return (
    <div className="bg-white py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Hostlio PG Accommodation</h1>
        <p className="text-gray-600 text-lg">
          India&apos;s Largest PG Network to Book your PG Accommodation Online
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-md w-11/12 max-w-5xl mx-auto mt-8 rounded-md px-5 py-6">
        <div className="flex items-center border rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Enter city name, area etc..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
          />
          <div className="px-4 text-gray-400">
            <FaSearch />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-900 text-white px-5 py-3 flex items-center gap-2 hover:bg-blue-700"
          >
            <FaCrosshairs />
            <Link href={`/hostels?city=${city}`}>Search</Link>
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-5xl mx-auto mt-6">
        {pgs.length > 0 ? (
          <ul className="bg-gray-100 rounded-md p-4">
            {pgs.map((pg, index) => (
              <li key={index} className="py-2 border-b last:border-none">
                <strong>{pg.name}</strong> – {pg.address}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Header3;
