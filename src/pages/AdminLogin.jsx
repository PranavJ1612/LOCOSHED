import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const AdminLogin = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen ">
        <img
          className=" absolute w-full h-full object-cover"
          src="./image/img2.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className=" fixed w-full px-4 py-28 z-50 ">
          <div className=" max-w-[450px] h-[400px] mx-auto bg-black/75 text-white border-2 border-solid rounded mt-[60px]">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold">Admin Login</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded-lg font-bold">
                  Login
                </button>
                <Link to="/">
                  <p className="flex flex-col items-center text-blue-500">
                    Go back
                  </p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
