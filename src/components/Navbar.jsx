import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming initially the user is not logged in
  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false); // Assuming this function updates the login status
  };


  return (
    <div className="fixed flex  justify-between w-full  z-[400] p-4 bg-gray-900 ">
      <Link to="/">
        <p className="text-xl  cursor-pointer hover:underline hover:font-semibold ">
          DIESEL LOCO SHED
        </p>
      </Link>
      {isLoggedIn && ( // Render the button only if user is logged in
        <button
          onClick={handleLogout}
          className="bg-red-500 text-lg px-4 rounded hover:bg-red-700"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;

//hover:underline-offset-4
