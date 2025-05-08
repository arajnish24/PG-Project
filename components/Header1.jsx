'use client'
import Image from 'next/image'
import Block from './Block'
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
      return;
    }
    setAuth(false);
  },[auth]);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };

  return (
      <div className="flex justify-between border-b-2 border-blue-600 bg-gradient-to-r from-pink-300 to-blue-400
        items-center h-15 px-10">

         {/* Logo Placeholder (optional) */}

          {/* <Image 
          src={"/logo4.png"} 
          alt="logo4" 
          width={200} 
          height={200} 
          className="w-50 h-15" 
        /> */}

        {/* Email with Message Badge */}

        <div className="flex items-center gap-3 ml-20">
          <h5 className="text-white text-center">
            info@hostliiopg.co.in
          </h5>
          <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              5 New
          </span>
        </div>
      <div className=" font-bold text-xl text-white h-full flex mr-20 items-center">

      {/* ****************************************
                  Header Content

          <Block title={"Become a member"} para={"Aditional 10% off on stays."} />
          <Block title={"2Let for business"} para={"Trusted by 5000 coporates."} />
          <Block title={"List your property"} para={"Start earning in 30 min."} />
          <Block title={"7903899365"} para={"Call us to book now."} />
                  
       **************************************** */}
      
          <div className=" flex items-center px-3">
              <Image 
                  src={"/users.svg"} 
                  alt="users" 
                  width={200} 
                  height={200} 
                  className="w-10 h-10 rounded-full mr-2" 
              />

                {
                  auth ? (
                    <h3 className="font-bold cursor-pointer "
                      onClick = {handleLogout}>Logout
                    </h3>
                  ) : (
                    <Link href={"/login"}>
                      <h3 className="font-bold ">
                        Login/Signup
                      </h3>
                    </Link>
                  )
                }
          </div>
      </div>
    </div>
  );
};

export default Header1;