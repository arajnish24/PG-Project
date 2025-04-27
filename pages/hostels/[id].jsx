import Image from "next/image"

const SingleHostels = () => {
  return (
    <div className="w-6/12 mx-auto">
      <Image
        src={'/room1.jpg'}
        alt="room"
        width={2000}
        height={2000}
        className="w-full h-large-box my-5" 
      />
      <div className=" ">
        <h3 className="text-3xl font-bold ">
            Maa Veena Boys & Girls Hostel
        </h3>
        <p className="text-xl my-5 text-justify">Lorem ipsum dolor sit amet consectetur
            eligendi quae dolor? Consequatur omnis enim numquam repellendus quaerat porro sint 
            id neque velit perferendis sapiente fuga quasi itaque, necessitatibus, quia nisi, 
            voluptates vero earum minima blanditiis unde maxime?
        </p>
        <button className="w-40 h-14 rounded-lg bg-blue-400 text-xl font-bold">
            Price : 3999
        </button>
        <p className="text-3xl font-bold my-5">Facilities : </p>
        <ul className="flex text-xl justify-between">
            <li>free wifi</li>
            <li>24*7 Electricity</li>
            <li>Study Table</li>
            <li>Two Beds</li>
            <li>Two Chairs</li>
            <li>Garden</li>
        </ul>
        <button className="w-40 h-14 rounded-lg bg-red-400 my-5 text-lg font-bold">
            Book Now
        </button>
      </div>
    </div>
  )
}

export default SingleHostels
