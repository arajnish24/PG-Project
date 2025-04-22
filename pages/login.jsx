import Head from "next/head"

const Login = () => {
  return (
    <div>
        <Head>
            <title>2let - Login</title>
        </Head>
        <div className="flex h-screen justify-center 
            items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">

        <div className=" absolute w-full top-10 px-20 flex items-center ">  {/* text-white */}
            <h2 className="text-5xl font-bold mr-5">2let</h2>
            <p className=" font-bold text-2xl ">
                PG and Residence hostels across 500 cities, 10+ countries
            </p>
        </div>

        <div className="flex justify-center items-center w-9/12">
            <div clasName="text-white">
                <p className="font-bold text-5xl text-justify">
                    There's a smarter way to 2let around
                </p>

                <p className="text-2xl mt-5 text-justify">
                    Sign up with your phone number and get exclusive access to discount 
                    and savings on 2let PG and Residence with our study journey.
                </p>
            </div>

            <div className=" ml-20 pb-40 w-10/12 border bg-slate-50">
                <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to 
                    bg-red-500 text-lg font-bold text-white">
                        Sign up & get upto ₹400 chashback
                </p>

                <div className="px-10">
                    <h3 className="text-5xl font-bold my-5">Login / Signup</h3>
                    <p className="font-bold text-lg mb-1">Please enter your phone number 
                        to continue
                    </p>

                    <input 
                        type="text" 
                        placeholder="Enter your name..." 
                        className="outline-none border my-3 border-black px-3 py-1 w-96 h-10" 
                    />
                    
                    <input 
                        type="email" 
                        placeholder="Enter your email..." 
                        className="outline-none border my-3 border-black px-3 py-1 w-96 h-10" 
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Enter your password..." 
                        className="outline-none border my-3 border-black px-3 py-1 w-96 h-10" 
                    />

                    <button 
                        type="submit" 
                        className="w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer
                            hover:bg-red-600 text-white my-5 rounded-lg">
                            Sign Up
                    </button>

                    <p className=" my-1 text-xl">
                        <span>Already have an account ?</span>
                        <span className="ml-1 border-b-2 border-gray-500 text-black-200 pb-1
                            hover:cursor-pointer">Login</span>
                    </p>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Login
