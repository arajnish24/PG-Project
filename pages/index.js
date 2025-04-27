import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Head from "next/head";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules'; // modules for autoplay + pagination


const Home = () => {
  return (
    <div>

{/* *************************************
Import All Headers and Head
************************************* */}
      <Head>
        <title>2let : India Best Online PG and Residence Booking site for Students and Bachelors</title>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className=" mx-20">
        <div className=" my-14 ">

{/* **********************************
        Swiper Banner
        **********************************/}
          <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-80 rounded-lg overflow-hidden"
            >
            <SwiperSlide>
              <Image 
              src={"/banner1.jpg"}
              alt="banner1" 
              width={3000} 
              height={3000} 
              className=" h-80 w-full" />
            </SwiperSlide>

            <SwiperSlide>
              <Image 
                src={"/banner3.jpg"}
                alt="banner3" 
                width={3000} 
                height={3000} 
                className=" h-80 w-full" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* ***********************************
                Advertisement Banner
        *********************************** */}
        <div className=" mb-14 ">
        <Image 
            src={"/banner2.avif"}
            alt="banner2" 
            width={3000} 
            height={3000} 
            className=" h-30 w-full" />
        </div>

        <Header4 />     {/* Import Header4 */}
      </div>
      <Footer />         {/* Import Footer */}
    </div>
  )
}

export default Home;
