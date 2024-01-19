import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pf, setPf] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const [admin, setAdmin] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !pf || !password) alert("Enter all fields");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Registerd Successfully 😊...");
        setTimeout(()=>{
          navigate('/login');
        },2000)
        // navigate("/login");
      })
      .catch((error) => toast.error("Registration Failed🥺"));
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="w-full h-screen ">
        <img
          className=" absolute w-full h-full object-cover"
          src="./image/img2.jpg"
          alt="/"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[550px] mx-auto bg-black/75 text-white border-2 border-solid rounded sm:mt-8 ">
            <div className="max-w-[320px] mx-auto py-14 ">
              <h1 className="text-3xl font-bold">Sign Up</h1>

              <form
                className="w-full flex flex-col py-4"
                onSubmit={handleSubmit}
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="text"
                  placeholder="P.F. number"
                  value={pf}
                  onChange={(e) => setPf(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
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

                <div className="flex flex-row pr-6">
                  <p className="pr-4">Is Admin?</p>
                  <label className="pr-4">
                    <input
                      type="radio"
                      name="admin"
                      // value={admin}
                      // onChange={(e) => setAdmin(e.target.value)}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="admin"
                      // value={admin}
                      // onChange={(e) => setAdmin(e.target.value)}
                    />
                    No
                  </label>
                </div>
                <button className="bg-red-600 py-3 my-6 rounded-lg font-bold">
                  Register
                </button>
                <p className="flex flex-col items-center">
                  <span className="text-gray-600">Already have account?</span>{" "}
                  <Link to="/login">
                    <span className="text-blue-500 hover:font-bold">
                      Sign In
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

export default Register;
