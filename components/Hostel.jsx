import Image from "next/image"
import Link from "next/link";

const Hostel = ({e}) => {
  return (
    <div className="border-2 border-gray-500 rounded-lg h-90 w-full mb-5 p-5">
      <div className="flex">
        <Image 
            src={
                e?.banner
            }
            alt="room"
            width={200}
            height={200}
            className="w-96 h-60 mr-3"
        />
        <div className="flex flex-col justify-between">
            {e 
                ? e.gallery?.map((ele) => {
                    return(
                        <Image 
                            key={ele}
                            src={ele}
                            alt="room"
                            width={2000}
                            height={2000}
                            className="w-28 h-16 object-cover "
                        />
                    );
                }) : ""
            }
        </div>
        <div className="ml-20">
            <h2 className=" font-bold text-2xl line-clamp-1">
                {e?.name}
            </h2>
            <p className="text-justify my-5 text-lg">
                {e?.description}
            </p>
            <div className="text-1xl my-5">
                <span className="font-bold justify-center items-center">
                    Facilities :
                </span>
                <ul className="flex">
                    {e 
                        ? e.facilities ?.map((ele) => {
                            return (
                                <li key = {ele.name} className=" mr-10 mb-3 flex items-center">
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
                        }) : ""
                    }
                </ul>
            </div>
            <div className="flex items-center">
                <button className="w-40 h-14 rounded-lg bg-blue-400 text-lg font-bold">
                    Price : &#8377; {e?.price} / m
                </button>
                <Link href={`/hostels/${e?._id}`} className="text-xl font-bold text-black-500 ml-10">
                    View Details
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hostel;
