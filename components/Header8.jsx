"use client";
import React from "react";
import { FaMapPin, FaCalendarAlt, FaTags } from "react-icons/fa";

const Header8 = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#003366] mb-4 relative inline-block">
        What We Offer
        <div className="h-1 w-16 bg-blue-500 mx-auto mt-2 rounded"></div>
      </h2>

      <p className="max-w-3xl mx-auto text-gray-700 mb-10 px-4">
        The listed services are offered to all our customers. We assure you the best
        deals in all our properties and the chance to live a more luxurious life with lesser cost.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-20">

        {/* Find PG Options */}

        <div className="flex flex-col items-center text-center">
          <FaMapPin className="text-5xl text-[#03A9F4] mb-4" />
          <h3 className="text-lg font-semibold text-[#03A9F4] mb-2">Find PGs Near You</h3>
          <p className="text-sm text-gray-600">
            Find Paying guests near you by selecting your location. We cover more than 50+ localities in every city.
          </p>
        </div>

        {/* Book Online Options */}

        <div className="flex flex-col items-center text-center">
          <FaCalendarAlt className="text-5xl text-[#03A9F4] mb-4" />
          <h3 className="text-lg font-semibold text-[#03A9F4] mb-2">Book Online</h3>
          <p className="text-sm text-gray-600">
            Book your PG online through our web portal or mobile application. Avail discounts that are available for booking online.
          </p>
        </div>

        {/* Best Deals Options */}
        <div className="flex flex-col items-center text-center">
          <FaTags className="text-5xl text-[#03A9F4] mb-4" />
          <h3 className="text-lg font-semibold text-[#03A9F4] mb-2">Best Deals On PGs</h3>
          <p className="text-sm text-gray-600">
            We have tie ups with PGs in every city. We make sure that our customers get the best deals for PGs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header8;
