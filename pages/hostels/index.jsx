import Filters from "@/components/Filters";
import Header1 from "@/components/Header1";
import Hostel from "@/components/Hostel";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Hostels = ({ hostels }) => {
  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const handleCheckList = async () => {
    const { data } = await axios.get(`/api/facilities/search?val=${checkedList}`);
    if (data?.hostels) {
      setList(data.hostels);
    }
  };

  useEffect(() => {
    if(checkedList){
      handleCheckList();
    }
  },[checkedList])

  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price}`);
    if (data?.hostels) {
      setList(data.hostels);
    }
  };

  return (
    <>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className=" col-span-3">
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        </div>
        <div className="col-span-9">
          {
            list.length > 0
              ? list.map((e) => {
                return (
                  <div className=" m-5 " key={e._id}>
                    <Hostel e={e} />
                  </div>
                );
              })
              : hostels
              ? hostels.map((e) => {
                return (
                  <div className=" m-5 " key={e._id}>
                    <Hostel e={e} />
                  </div>
                );
              })
            : ""
          }
        </div>
      </div>
    </>
  );
};

// ******************************************
//     Next.js Server Side Rendering
// ******************************************


export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hostels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hostels: data.hostels ? data.hostels : data.allhostels,
    },
  };
}

export default Hostels;

// export async function getServerSideProps(ctx) {
//   try {
//     const res = await fetch(
//       `${process.env.BASE_URL}/api/hostels?city=${ctx.query.city}`
//     );
    
//     if (!res.ok) {
//       throw new Error("Failed to fetch hostels");
//     }

//     const data = await res.json();

//     return {
//       props: {
//         hostels: data?.hostels || data?.allhostels || [],
//       },
//     };
//   } 
//   catch (error) {
//     console.error("Error fetching hostels:", error);
//     return {
//       props: {
//         hostels: [],
//       },
//     };
//   }
// }

// export default Hostels;

// export async function getServerSideProps(ctx) {
//   const res = await fetch(
//     `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       hostels: data.hostels ? data.hostels : data.allhostels,
//     },
//   };
// }

