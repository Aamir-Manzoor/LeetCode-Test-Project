import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/images/LeetCode_logo_rvs.png";

const Navbar = () => {
  return (
    <div className="w-ful h-full">
    <nav className="max-w-maxContent w-11/12 text-richblack-5 mx-auto pt-2 flex justify-between items-center ">
      <Link to="/" className="flex items-center justify-center ">
        <img src={logo} alt="logo" width={50} height={40} />
        <h1 className="text-2xl font-semibold">LeetCode</h1>
      </Link>

      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="text-[#fea116] hover:bg-[#fea116] hover:text-richblack-900 px-5 py-2 rounded-full"
        >
          Premium
        </Link>
        <Link
          to="/explore"
          className="text-richblack-5 hover:bg-richblack-5 hover:text-richblack-900 px-5 py-2 rounded-full"
        >
          Explore
        </Link>
        <Link
          to="/Developer"
          className="text-richblack-5 hover:bg-richblack-5 hover:text-richblack-900 px-5 py-2 rounded-full"
        >
          Developer
        </Link>
        <Link
          to="/Product"
          className="text-richblack-5 hover:bg-richblack-5 hover:text-richblack-900 px-5 py-2 rounded-full"
        >
          Product
        </Link>
        <Link
          to="/Signin"
          className="text-richblack-5 hover:bg-richblack-5 hover:text-richblack-900 px-5 py-2 rounded-full"
        >
          Sign in
        </Link>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
