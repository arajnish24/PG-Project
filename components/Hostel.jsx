import Image from "next/image"
import Link from "next/link";

const Hostel = () => {
  return (
    <div className="border-2 border-gray-500 rounded-lg h-75 w-full mb-5 p-5">
      <div className="flex">
        <Image 
            src={'/room1.jpg'}
            alt="room"
            width={200}
            height={200}
            className="w-96 h-60 mr-3"
        />
        <div className="grid grid-rows-3 gap-1">
            <Image 
                src={'/room1.jpg'}
                alt="room"
                width={200}
                height={200}
                className="w-28"
            />
            <Image 
                src={'/room1.jpg'}
                alt="room"
                width={200}
                height={200}
                className="w-28"
            />
            <Image 
                src={'/room1.jpg'}
                alt="room"
                width={2000}
                height={2000}
                className="w-28"
            />
            <Image 
                src={'/room1.jpg'}
                alt="room"
                width={2000}
                height={2000}
                className="w-28"
            />
        </div>
        <div className="ml-20">
            <h2 className=" font-bold text-3xl line-clamp-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam itaque ducimus in.
            </h2>
            <p className="text-justify my-5 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem non delectus 
                ea cumque ut optio accusantium animi voluptates quae quas quisquam doloribus, sapiente 
                asperiores praesentium corrupti inventore tempora provident architecto veniam. Id, veniam
            </p>
            <p className="text-2xl my-5">
                <span className="font-bold">
                    Facilities :
                </span>
                <span> Free wifi, 24*7 Electricity, Mess, Study Table, Two bed, Two Chair, One Almirah</span>
            </p>
            <div className="flex items-center">
                <button className="w-40 h-14 rounded-lg bg-blue-400 text-xl font-bold">
                    Price : 2999
                </button>
                <Link href={'/hostels/2'} className="text-xl font-bold text-black-500 ml-10">
                    View Details
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hostel;
