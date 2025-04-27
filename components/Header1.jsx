'use client'
import Image from 'next/image'
import Block from './Block'
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Header1 = () => {
  let auth;
  useEffect(() => {
    auth = Cookies.get('user');
  },[]);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('user');
    router.push("/");
  }

  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
      <Image 
        src={"/logo3.png"} 
        alt="logo3" width={200} 
        height={200} 
        className="w-40 h-20" />

      <div className="border-r-2 border-gray-300 h-full flex">
         <Block title={"Become a member"} para={"Aditional 10% off on stays."} />
         <Block title={"2Let for business"} para={"Trusted by 5000 coporates."} />
         <Block title={"List your property"} para={"Start earning in 30 min."} />
         <Block title={"7903899365"} para={"Call us to book now."} />
         <div className=" flex items-center px-3">
             <Image 
                    src={"/users.svg"} 
                    alt="users" 
                    width={200} 
                    height={200} 
                    className="w-10 h-10 rounded-full mr-4" />

                {
                  auth ? (
                    <h3 className="font-bold cursor-pointer "onClick = {handleLogout}>Logout</h3>
                  ) : (
                    <Link href={'/login'}>
                      <h3 className="font-bold ">Login/Signup</h3>
                    </Link>
                  )
                }
         </div>
      </div>
    </div>
  )
}

export default Header1
