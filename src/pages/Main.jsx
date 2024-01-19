import React from "react";
import Navbar from "../components/Navbar";
import {MdArrowForwardIos} from 'react-icons/md'

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen ">
        <img
          className=" absolute w-full h-full object-cover blur-sm"
          src="./image/main.jpg"
          alt="/"
        />
        <div className="fixed top-0 left-0 bg-black/60 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-28 z-50">
          <div className="flex items-center flex-col">
            <div className="max-w-[450px] h-[320px] mx-auto bg-black/75 text-white border-2 border-solid rounded mt-[50px]">
              <div className="max-w-[350px] mx-[80px]">
                <h1 className="pt-5 grid  text-xl place-items-center ">
                  Welcome to
                  <pre>Loco Shed System</pre>
                </h1>
                <div className="flex flex-col place-items-center py-[3rem] gap-6 w-full">
                  <button className="bg-white text-black rounded-sm w-full  py-2 px-3 text-xl flex flex-row justify-between">
                     According to Section
                     <MdArrowForwardIos className="mt-1 "/>
                  </button>
                  <button className="bg-white text-black rounded-sm w-full py-2 px-3 text-xl flex flex-row justify-between ">
                     According to Locomotive
                     <MdArrowForwardIos className="mt-1 "/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
