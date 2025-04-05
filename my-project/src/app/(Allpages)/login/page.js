"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../../../components/Navbar';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const router = useRouter();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // You can add real authentication logic here
    alert("Login successful");

    // Redirect to homepage after user clicks "OK"
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 bg-[#E5F0F1] flex items-center justify-center p-6">
          <Image
            src="https://9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io/f1724489696454x764042949595726300/login.svg"
            alt="Login"
            width={500}
            height={500}
            className="object-contain w-[80%] sm:w-[70%] md:w-[80%] lg:w-[70%]"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-4 sm:p-8">
          <div className="w-full max-w-md p-6 sm:p-8 rounded-lg shadow-lg bg-white">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Login</h1>

            <form onSubmit={onSubmitHandler}>
              {/* Username */}
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium mb-2">Username</label>
                <input
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  type="text"
                  placeholder="Username"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-900"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium mb-2">Password</label>
                <input
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-900"
                />
              </div>

              {/* Signup Link */}
              <p className="text-center text-sm sm:text-base my-4">
                Don&#39;t have an account?{' '}
                <a href="/register" className="text-teal-900 font-semibold hover:underline">
                    Signup
                </a>
              </p>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-32 sm:w-40 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-md transition-all duration-300"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
};

export default Login;
