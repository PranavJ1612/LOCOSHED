import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 ">
      <Link to="/login">
        <button className="font-semibold text-2xl bg-blue-800 hover:bg-white hover:text-blue-800  m-3 px-20	py-3 rounded hover:border-solid hover:border-2 border-blue-800 transition duration-300 xl:m-7  sm:m-5 md:m-6 ">
          Login
        </button>
      </Link>

      <Link to='/register'>
        <button className="font-semibold text-2xl bg-red-600 m-3 px-20	py-3 rounded hover:bg-white hover:text-red-600 hover:border-solid hover:border-2 border-red-600 transition duration-300 xl:m-7  sm:m-5 md:m-6 ">
          Register
        </button>
      </Link>

      <Link to="/adminlogin">
        <button className="font-semibold text-2xl bg-black hover:bg-white hover:text-black m-3 px-20	py-3 rounded hover:border-solid hover:border-2 border-black transition duration-300 xl:m-7  sm:m-5 md:m-6 ">
          Admin
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
