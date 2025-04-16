import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Head from "next/head";
import Image from "next/image";


const Home = () => {
  return (
    <div>
      <Head>
        <title>2let : India's Best Online PG and Residence Booking site for Students and Bachelors</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className=" mx-20">
        <div className=" my-14 ">
          <Image 
            src={"/banner3.jpg"}
            alt="banner3" 
            width={200} 
            height={200} 
            className=" h-70 w-full" />
        </div>
        <div className=" mb-14 ">
        <Image 
            src={"/banner2.avif"}
            alt="banner2" 
            width={200} 
            height={200} 
            className=" h-30 w-full" />
        </div>
        <Header4 />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
