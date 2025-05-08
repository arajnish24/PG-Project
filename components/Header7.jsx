"use client";
import React from "react";
import { FaSearch, FaRegClipboard, FaEnvelopeOpenText } from "react-icons/fa";

const Header7 = () => {
  return (
    <section className="bg-[#f3f7fc] py-12 text-center">
      <h2 className="text-3xl font-bold text-[#003366] mb-4 relative inline-block">
        How it's Work
        <div className="h-1 w-16 bg-blue-500 mx-auto mt-2 rounded"></div>
      </h2>

      <p className="max-w-3xl mx-auto text-gray-700 mb-10 px-4">
        Our process is simple and very different from those of others in this industry.
        The search process is streamlined by the locality or landmark of your choice.
        This allows you to find the right hostel or room. You can choose the subscription
        plan that best suits your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-20">

        {/* Search Options */}
        
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
          <div className="text-blue-600 text-4xl mb-4 mx-auto w-fit">
            <FaSearch />
          </div>
          <h3 className="text-lg font-semibold text-[#2196F3] mb-2">Search</h3>
          <p className="text-sm text-gray-600">
            Fill the search fields like your locality, or city, boys pg or girls pg, and working professionals.
          </p>
        </div>

        {/* Payments Options */}

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
          <div className="text-blue-600 text-4xl mb-4 mx-auto w-fit">
            <FaRegClipboard />
          </div>
          <h3 className="text-lg font-semibold text-[#2196F3] mb-2">Make Payment</h3>
          <p className="text-sm text-gray-600">
            Select your PG Rental Home, Sharing Type and make payment online.
          </p>
        </div>

        {/* Booking Confirmations Options */}

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
          <div className="text-blue-600 text-4xl mb-4 mx-auto w-fit">
            <FaEnvelopeOpenText />
          </div>
          <h3 className="text-lg font-semibold text-[#2196F3] mb-2">
            Booking Confirmation
          </h3>
          <p className="text-sm text-gray-600">
            Your subscription and booking date confirmed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header7;
