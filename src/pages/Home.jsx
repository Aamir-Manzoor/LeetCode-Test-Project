import React from "react";
import Navbar from "../components/common/Navbar";
import "../App.css";
import { Link } from "react-router-dom";
import Section2 from "../assests/images/Section2.png";
import HeroSectionImage from "../assests/images/Herosection.png";
import Edu from "../assests/images/Edu.png";
import section2Img1 from "../assests/images/section2-1.png";
import section2Img2 from "../assests/images/section2-2.png";
import section3Img from "../assests/images/section3.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div className="w-full h-full ">
      {/*Section 1*/}

      <div className="homepage_bg w-screen min-h-screen">
        <Navbar />
        <div className="max-w-maxContent w-11/12 mx-auto lg:flex lg:pt-20">
          <div className="grid  place-items-center w-[50%]">
            <img
              src={HeroSectionImage}
              alt="hero"
              width={450}
              height={400}
              className=""
            />
          </div>

          <div className="flex items-center flex-col w-[50%] text-richblack-5 gap-5 lg:pt-20">
            <p className="text-3xl font-bold">A New Way to Learn</p>
            <p className=" text-center text-lg font-normal">
              LeetCode is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews.
            </p>
            <button className="flex items-center gap-2 justify-center lg:mt-4 px-5 py-2 text-lg text-richblack-5 rounded-full bg-gradient-blue-100 hover:bg-gradient-blue-200">
              <p className="text-base ">Create Account</p>
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/*Section 2*/}

      <div className="max-w-maxContent w-11/12 mx-auto gap-8 lg:flex -mt-64">
        <div className="w-[50%] flex  flex-col gap-7">
          <span className="flex justify-end items-center ml-auto">
            <p className="text-2xl font-semibold text-gradient-blue-100">
              Start Exploring
            </p>
            <img src={Edu} alt="Edu" />
          </span>
          <p>
            <span className="flex w-[85%] ml-auto justify-end items-center text-base font-normal text-justify text-richblack-100">
              Explore is a well-organized tool that helps you get the most out
              of LeetCode by providing structure to guide your progress towards
              the next
            </span>
            <span className="ml-auto flex justify-end text-richblack-100">
              step in your programming career.
            </span>
          </p>

          <Link
            to="/"
            className="ml-auto flex gap-3 items-center text-xl text-blue-200 "
          >
            <p className="text-lg font-semibold"> Get Started </p>
            <MdOutlineKeyboardArrowRight />
          </Link>
        </div>

        <div className="flex justify-items-end w-[50%]">
          <img
            src={Section2}
            alt=""
            width={450}
            height={350}
            className="ml-auto"
          />
        </div>
      </div>

      {/*Section 3*/}
      <div className=" max-w-maxContent w-11/12 mx-auto flex gap-10 mt-20">
        <div className="w-[40%] flex ml-auto flex-col items-start gap-7 justify-start">
          <img src={section2Img1} alt="ImageSection" />
          <h2 className="text-blue-200 text-2xl font-semibold leading-3">
            Questions, Community & Contests
          </h2>
          <p className="text-richblack-100 text-base font-normal ">
            Over 3100 questions for you to practice. Come and join one of the
            largest tech communities with hundreds of thousands of active users
            and participate in our contests to challenge yourself and earn
            rewards.
          </p>
          <Link
            to="/"
            className="flex gap-3 items-center text-xl text-blue-200 "
          >
            <p className="text-lg font-semibold "> View Questions </p>
            <MdOutlineKeyboardArrowRight />
          </Link>
        </div>
        <div className="w-[40%] flex ml-auto flex-col items-start gap-7 justify-start">
          <img src={section2Img2} alt="ImageSection" />
          <h2 className="text-yellow-600 text-2xl font-bold leading-3">
            Companies & Candidates
          </h2>
          <p className="text-richblack-100 text-base font-normal ">
            Not only does LeetCode prepare candidates for technical interviews,
            we also help companies identify top technical talent. From
            sponsoring contests to providing online assessments and training, we
            offer numerous services to businesses.
          </p>
          <Link
            to="/"
            className="flex gap-3 items-center text-xl text-blue-200 "
          >
            <p className="text-lg font-semibold"> Business Opportunities </p>
            <MdOutlineKeyboardArrowRight />
          </Link>
        </div>
      </div>

      {/*Section 4*/}

      <div className=" max-w-maxContent w-11/12 mx-auto mt-20">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src={section3Img} alt="" />
          <p className="text-2xl font-semibold text-center text-gradient-blue-100">Developer</p>
          <p className="w-[45rem] text-center text-base text-richblack-100 leading-8">
            We now support 14 popular coding languages. At our core, LeetCode is
            about developers. Our powerful development tools such as Playground
            help you test, debug and even write your own projects online.
          </p>
        </div>
      </div>
     {/*Section 5*/}
      <div>
      
      </div>
    </div>
  );
};

export default Home;
