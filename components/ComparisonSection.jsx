"use client";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const features = [
    { 
        title: "Online Enabled Booking", 
        bookMyPg: true, 
        others: false 
    },
    { 
        title: "Online Coupon Discounts", 
        bookMyPg: true, 
        others: false 
    },
    { 
        title: "Low Security Deposit", 
        bookMyPg: true, 
        others: false 
    },
    { 
        title: "Brokerage", 
        bookMyPg: false, 
        others: true 
    },
    { 
        title: "Fully Furnished", 
        bookMyPg: true, 
        others: false 
    },
    { 
        title: "Free Wi-Fi", 
        bookMyPg: true, 
        others: false 
    },
    { 
        title: "Book My PG App enabled Stay", 
        bookMyPg: true, 
        others: false 
    },
    { 
        title: "24*7 Security", 
        bookMyPg: true, 
        others: false 
    },
    { 
        title: "Live Customer Support", 
        bookMyPg: true, 
        others: false 
    },
];

const Comparison = () => {
  return (
    <section className="w-full bg-[#181818] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-white">

        {/* Left Section */}

        <div>
          <h2 className="text-3xl font-bold mb-3">Comparison</h2>
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          <p className="text-lg mb-10">
            How Hostlio better than normal PG's and low maintained PG Accommodation services.
          </p>

          <h3 className="text-2xl font-semibold mb-2">App Available In Stores</h3>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          <p className="text-base mb-6 max-w-md">
            Live life hassle free with the Hostlio App. Book your stay, make payments,
            manage your accommodation and stay up to date with all events and updates.
          </p>

          <div className="flex gap-4 mt-4">
            <img
              src="/google-play.png"
              alt="Google Play"
              width={200}
              height={200}
              className="w-30 h-10 object-contain border-2 "
            />
            <img
              src="/app-store.png"
              alt="App Store"
              width={200}
              height={200}
              className="w-30 h-10 object-contain border-2"
            />
          </div>
        </div>

        {/* Right Section */}

        <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-3 font-semibold text-center bg-white border-b border-gray-200">
            <div className="py-4 text-left pl-6"> </div>
            <div className="py-4 text-blue-600 shadow-lg bg-white z-10 relative">Hostlio</div>

            <div className="py-4">Others</div>
          </div>
          <div className="divide-y divide-gray-200">
            {features.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-3 items-center text-center px-4 py-3 bg-white hover:bg-gray-50"
              >
                <div className="text-left pl-6 font-medium text-gray-700">
                  {item.title}
                </div>
                <div>
                  {item.bookMyPg ? (
                    <FaCheckCircle className="text-green-500 mx-auto" />
                  ) : (
                    <FaTimesCircle className="text-gray-400 mx-auto" />
                  )}
                </div>
                <div>
                  {item.others ? (
                    <FaCheckCircle className="text-red-500 mx-auto" />
                  ) : (
                    <FaTimesCircle className="text-gray-400 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
