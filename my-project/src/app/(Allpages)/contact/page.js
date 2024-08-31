"use client";
import { useState } from 'react';
import Navbar from '../../../../components/Navbar';
import Image from 'next/image'; 
import loginimage from "../../../../public/loginimage.svg";

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Placeholder for form submission logic
    console.log('User:', user);

    // Reset form fields after submission
    setUser({
      username: '',
      password: '',
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        <div className="w-1/2 bg-[#E5F0F1] flex items-center justify-center">
          <Image
            src={loginimage}
            alt="Login"
            className="object-cover"
            layout="fill" // Use layout="fill" for responsive images
            objectFit="cover" // Maintain aspect ratio
          />
        </div>
        <div className="w-1/2 flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white">
            <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-4">
                <label className="block text-base font-medium mb-2">Username</label>
                <input
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base font-medium mb-2">Password</label>
                <input
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <p className="text-center my-4">
                Don&apos;t have an account?{' '}
                <a href="/register" className="text-teal-900 font-bold hover:underline">
                  Signup
                </a>
              </p>

              <button
                type="submit"
                className="w-40 ml-28 py-2 bg-teal-900 text-white rounded-md"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
