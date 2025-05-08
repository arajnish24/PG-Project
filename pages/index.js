"use client";

import Head from "next/head";
import Image from "next/image";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Header5 from "@/components/Header5";
import Header6 from "@/components/Header6";
import Header7 from "@/components/Header7";
import Header8 from "@/components/Header8";
import ComparisonSection from "@/components/ComparisonSection";
import Footer from "@/components/Footer";


import { FaSnowflake, FaBed, FaTv, FaWifi, FaLock, FaTable } from "react-icons/fa";
import { MdBalcony, MdHotTub } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";




// Amenities data
const amenities = [
  { 
    icon: <FaSnowflake size={32} />, 
    name: "Air Conditioner", 
    status: "Surely Available" 
  },
  { 
    icon: <MdBalcony size={32} />, 
    name: "Balcony", 
    status: "You need to request" 
  },
  { 
    icon: <FaBed size={32} />, 
    name: "Extra Bed", 
    status: "You need to request" 
  },
  { 
    icon: <FaTv size={32} />, 
    name: "Flat TV", 
    status: "Surely Available" 
  },
  { 
    icon: <MdHotTub size={32} />, 
    name: "Hot & Cold Water", 
    status: "Surely Available"
  },
  { 
    icon: <BsFillPhoneFill size={32} />, 
    name: "InterCom", status: "Surely Available" 
  },
  { 
    icon: <FaLock size={32} />, 
    name: "Locker", 
    status: "Surely Available" 
  },
  { 
    icon: <FaTable size={32} />, 
    name: "Read Table", 
    status: "Surely Available" 
  },
  { 
    icon: <FaWifi size={32} />, 
    name: "WiFi", 
    status: "Surely Available" 
  },
];

// Amenities Component
const AmenitiesList = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Amenities List</h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
        <p className="text-lg mb-12">
          We provide all the amenities, some amenities are surely available for all our service places. 
          Some of the items only you may get by request, Because that type of amenities are not mandatory.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, index) => (
            <div key={index} className="bg-white text-blue-900 flex items-center p-5 rounded-lg shadow-md">
              <div className="mr-4 text-blue-600">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Home Component
const Home = () => {
  return (
    <div>
      <Head>
        <title>Hostlio : Indias Best Online PG and Residence Booking site for Students and Bachelors</title>
      </Head>

      {/* Import all Headers */}
        <Header1 />
        <Header2 />
        <Header3 />
        <Header4 />
        <Header5 />
        <Header6 />
        <Header7 />
        <Header8 />

      {/* Apply Amenities Section */}
      <div className="mx-20 my-14">
        <AmenitiesList />
      </div>

      <ComparisonSection />

      {/* Import Footer */}
      <Footer />
    </div>
  );
};

export default Home;
