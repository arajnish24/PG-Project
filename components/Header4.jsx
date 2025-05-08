"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Discount data

const discountCards = [
  {
    city: "Chennai",
    discount: "₹500 off on rent",
    code: "PGCH500",
    image: "/chennai-skyline.jpg"
  },
  {
    city: "Mumbai",
    discount: "₹400 off on rent",
    code: "PGMB400",
    image: "/mumbai.jpg"
  },
  {
    city: "Delhi",
    discount: "₹600 off on rent",
    code: "PGDL600",
    image: "/delhi-skyline.jpg"
  },
  {
    city: "Bangalore",
    discount: "₹700 off on rent",
    code: "PGBL700",
    image: "/bangalore-skyline.jpg"
  },
  {
    city: "Hyderabad",
    discount: "₹350 off on rent",
    code: "PGHY350",
    image: "/hyderabad-skyline.jpg"
  },
  {
    city: "Pune",
    discount: "₹450 off on rent",
    code: "PGPN450",
    image: "/pune-skyline.jpg"
  },
];

const Header4 = () => {
  return (
    <div className="py-10 bg-white text-black">
      <h2 className="font-bold text-center text-3xl mb-6">Instant Discounts</h2>

      <div className="w-11/12 max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {discountCards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#003366] text-white rounded-md shadow-lg p-5 flex flex-col justify-between h-64 relative">
                <div>
                  <p className="text-sm mb-1">Instant Discount</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{item.city}</h3>
                    <img
                      src="/logo8.png"
                      alt="Hostlio Logo"
                      className="w-15 h-10"
                    />
                  </div>
                  <p className="text-lg mt-2">{item.discount}</p>
                  <p className="mt-1">
                    <span className="bg-white text-black px-2 py-1 font-mono rounded">
                      {item.code}
                    </span>
                  </p>
                  <p className="text-sm mt-10 italic">
                    *Valid only on 1 month bookings
                  </p>
                </div>

                <img
                  src={item.image}
                  alt={`${item.city} skyline`}
                  className="absolute bottom-0 left-0 w-full h-24 object-cover rounded-b-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Header4;
