import React from "react";
import Image from "next/image"; // if using Next.js

const Header5 = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-white text-black bg-gradient-to-r from-blue-400 to-red-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left: Text Content */}

        <div>
          <h2 className="text-3xl font-bold text-[#003366] mb-3">
            About Hostlio PG Accommodation
          </h2>
          <div className="w-16 h-1 bg-blue-500 mb-4 rounded"></div>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            We, at Hostlio PG accommodation, are India's fastest-growing network of managed
            Paying Guest (PG) rentals for working professionals. We hope to provide you with the best
            accommodation solutions with the help of our designs and technology. Our
            services across the country will help you find and book Paying
            Guest (PG) accommodation rental homes.
          </p>

          <button className="px-6 py-2 rounded-full border-2 border-blue-400 text-blue-500 font-semibold hover:bg-blue-50 transition-all">
            Read More
          </button>
        </div>

        {/* Right: Illustration */}

        <div className="flex justify-center">
          <img
            src="/illustration.avif" // replace with correct image path
            alt="People with luggage"
            width={500}
            height={500}
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Optional next section heading */}

      <h2 className="text-2xl font-bold text-center text-[#003366] mt-20">
        Product Video
      </h2>
      <div className="w-32 h-1 bg-blue-500 mx-auto mt-2 rounded"></div>
    </div>
  );
};

export default Header5;
