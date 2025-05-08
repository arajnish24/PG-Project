"use client";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";


// *********************************************************
//         Funtions to get hostels data from database
// *********************************************************
const SingleHostel = ({ hostel }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const cookie = Cookies.get("user");
    if (cookie) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, []);

  return (
    <>
      <Head>
        <title>{hostel?.name}</title>
      </Head>
      <div className="w-7/12 mx-auto my-10 ">
        <Image
          src={hostel?.banner}
          alt="hotel"
          width={2000}
          height={2000}
          className=" w-full h-large-box my-5"
        />
        <div className=" ">
          <h3 className=" text-3xl font-bold">
            {hostel?.name}
          </h3>
          <p className=" text-xl my-5 text-justify">
            {hostel?.description}
          </p>
          <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">
            Price : &#8377; {hostel?.price}
          </button>
          <p className=" text-3xl font-bold my-5">
            Facilities : 
          </p>
          <ul className=" flex text-xl justify-between">
            {hostel
              ? hostel.facilities?.map((ele) => {
                  return (
                    <li
                      key={ele.name}
                      className=" mr-10 mb-3 flex items-center"
                    >
                      <span>
                        <Image
                          src={ele.img}
                          width={200}
                          height={200}
                          className="w-8 h-8 rounded-full"
                        />
                      </span>
                      <span className="ml-5">{ele.name}</span>
                    </li>
                  );
                })
              : ""}
          </ul>
          {
            auth ? (
            <Link href={`/payment/${hostel?._id}`}>
              <button className=" w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
                Book Now
              </button>
            </Link>
          ) : (
            <span className=" text-2xl">
              Please{" "}
              <Link href={"/login"} className=" text-blue-500">
                Log in
              </Link>{" "}
              to get new Offers and Book the rooms !
            </span>
          )}
        </div>
      </div>
    </>
  );
};


// export async function getServerSideProps(ctx) {
//   const res = await fetch(
//     `${process.env.BASE_URL}/api/hostels?city=${ctx.query.city}`
//   );

//   const data = await res.json();

//   if (!data.hostel) {
//     return {
//       notFound: true,
//     };
//   }

//   // Clean undefined values
//   const cleanHostel = JSON.parse(
//     JSON.stringify(data.hostel, (key, value) => (value === undefined ? null : value))
//   );

//   return {
//     props: {
//       hostel: cleanHostel,
//     },
//   };
// }

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;

  try {
    const res = await fetch(`${process.env.BASE_URL}/api/hostels/${id}`);
    const data = await res.json();

    if (!data || !data.hostel) {
      return {
        notFound: true,
      };
    }

    // Remove undefined values to prevent serialization errors
    const cleanHostel = JSON.parse(
      JSON.stringify(data.hostel, (key, value) => (value === undefined ? null : value))
    );

    return {
      props: {
        hostel: cleanHostel,
      },
    };
  } catch (error) {
    console.error("Error fetching hostel:", error);
    return {
      notFound: true,
    };
  }
}

export default SingleHostel;