'use client';

import Head from "next/head";
import React, { useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";
// import Image from "next/image";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignUp = async () => {
    const res = await axios.post('/api/user/register', {
      name,
      email,
      password
    });
    if (res?.data) {
      Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }
  };

  const handleLogin = async () => {
    const res = await axios.post('/api/user/login', {
      email,
      password
    });
    if (res?.data) {
      Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  return (
    <div>
      <Head>
        <title>Hostlio - Login</title>
      </Head>

      <div className="flex justify-center items-center bg-gradient-to-r from-violet-400 to-green-400 bg-cover
        bg-center h-screen relative">
        <div className="absolute top-10 w-full px-10 flex items-center text-white">
          <h2 className="text-4xl font-bold mr-3">Hostlio</h2>
          <p className="font-bold text-lg">
            PG Accommodation for working professionals across 50 cities, 12+ States
          </p>
        </div>

        <div className="flex justify-center items-center w-9/12">
          <div className="text-white w-6/12 pr-10">
            <p className="font-bold text-5xl text-justify">
              There's a smarter way to Hostlio around
            </p>
            <p className="text-2xl mt-5 text-justify">
              Sign up with your phone number and email, get exclusive access to discounts 
              and savings on "PG Accommodation for working professionals to settle in 
              new States and Cities".
            </p>
          </div>

          <div className="ml-10 w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="h-10 flex items-center px-6 bg-gradient-to-r from-red-400 to-red-600 text-lg font-bold text-white">
              Sign up & get upto ₹200 Hostlio money
            </div>

            <div className="px-6 py-6">
              <h3 className="text-3xl font-bold mb-4">Login / Signup</h3>
              <p className="font-semibold mb-4">Please enter your email to continue</p>

              {
                !login && (
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Enter your password..."
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                onClick={login ? handleLogin : handleSignUp}
                className="w-full py-3 bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-bold rounded"
              >
                {login ? "Login" : "Sign Up"}
              </button>

              <p className="mt-4 text-center text-sm">
                {login ? "Don't have an account?" : "Already have an account?"}
                <span
                  className="ml-2 text-red-600 hover:cursor-pointer underline"
                  onClick={handleToggle}
                >
                  {login ? "Sign Up" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
