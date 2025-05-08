"use client";
import React from "react";

const Header6 = () => {
  return (
    <section className="py-12 bg-[#f3f7fc] h-auto w-full">
      <h2 className="text-center text-3xl font-bold text-[#003366] mb-8 relative justify-center">
        What We Offer
        <div className="h-1 w-16 bg-blue-500 mx-auto mt-2 rounded"></div>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">

        {/* Left side - content */}

        <div className="bg-[#bcaea9] p-6 md:w-[700px] rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center">

          {/* Logo and text */}

          <div className="flex flex-col items-start w-full md:w-1/2 space-y-4">
            {/* <img 
                src="/logo6.png" 
                alt="Hostlio Logo" 
                width={200}
                height={200}
                className="w-16 h-16" /> */}
            <h3 className="text-2xl font-bold text-red-700 justify-center">
              Hostlio
            </h3>
            <div>
              <h4 className="text-xl font-semibold underline text-red-600">
                Offer
              </h4>
              <p className="text-sm text-black mt-2 leading-relaxed">
                First Month Listing For Your PG Accommodation in Our Platform Rs.1000 Offer.

                <br />
                Please Register your PG Accommodation Property For 
                <span className="font-bold">Rs.500
                </span> 
                    and Get Leads To Your Mobile SMS / CALLS Directly.
              </p>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-black font-semibold">
              <span className="text-red-700 text-lg">🌐</span>
              Hostlio Pg accommodation.co.in
            </div>
          </div>

          {/* Right side - image */}

          <div className="w-full md:w-1/2">
            <img
              src="/hostel1.jpg" // replace with your building image path
              alt="Accommodation Building"
              width={500}
              height={500}
              className="rounded-md object-cover w-full h-64 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header6;
