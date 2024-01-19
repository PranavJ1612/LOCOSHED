import React from "react";
import Navbar from "../components/Navbar";
import Buttons from "../components/Buttons";

import "../index.css";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="relative w-full h-screen bg-cover ">
        <img
          className=" absolute w-full h-screen object-cover opacity-50 blur-[3px] inset-0 sm:block"
          src='./image/img.jpeg'
          alt="home image"
        />
        

        <Buttons />
      </div>
    </>
  );
};

export default Home;
