import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
// import { BiHomeAlt2 } from "react-icons/bi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        toast.success("Login successful!😊");
        setTimeout(()=>{
          navigate('/main')
        },1000)
      })
      .catch((error) => {
        toast.error('Wrong credentials. Please try again.🥺');
      });
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="w-full h-screen bg-cover">
        <img
          className=" absolute w-full h-full object-cover inset-0"
          src="./image/img2.jpg"
          alt="form-bg img"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[450px] mx-auto bg-black/75 text-white border-2 border-solid rounded sm:mt-[95px] mt-[95px]">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold">Login</h1>

              <form className="w-full flex flex-col py-4" onSubmit={SignIn}>
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded-lg font-bold">
                  Login
                </button>
                <p className="flex flex-col items-center">
                  <span className="text-gray-600">Don't have account?</span>{" "}
                  <Link to="/register">
                    <span className="text-blue-500 hover:font-bold">
                      Sign Up
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
