import React from "react";
import Navbar from "../components/common/Navbar";
import "../App.css";

import HeroSectionImage from "../assests/images/Herosection.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
const Home = () => {
  return (
    <div className="homepage_bg w-screen  min-h-screen ">
      <Navbar />

      {/*Section 1*/}

      <div className="max-w-maxContent w-11/12 mx-auto lg:flex lg:pt-20">
        <div className="grid  place-items-center w-[50%]">
          <img src={HeroSectionImage} alt="hero" width={450} height={400} className=""/>
        </div>

        <div className="flex items-center flex-col w-[50%] text-richblack-5 gap-5 lg:pt-20">
          <p className="text-3xl font-bold">A New Way to Learn</p>
          <p className=" text-center text-lg font-normal">
            LeetCode is the best platform to help you enhance your skills,
            expand your knowledge and prepare for technical interviews.
          </p>
          <button
          className="flex items-center gap-2 justify-center lg:mt-4 px-5 py-2 text-lg text-richblack-5 rounded-full bg-gradient-blue-100 hover:bg-gradient-blue-200"
          >
          <p className="text-base ">Create Account</p>
          <MdOutlineKeyboardArrowRight/>
          </button>
        </div>
      </div>

       {/*Section 2*/}

       <div>
       
       
       </div>

    </div>
  );
};

export default Home;
