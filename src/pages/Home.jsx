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
import Facebook from "../assests/Svgs/facebook.svg";
import Apple from "../assests/Svgs/apple.svg";
import Leap from "../assests/Svgs/leap-motion.svg";
import Square from "../assests/Svgs/squarespace.svg";
import Intel from "../assests/Svgs/intel.svg";
import Amazon from "../assests/Svgs/amazon.svg";
import section5 from '../assests/images/section5.png'
import Uber from "../assests/Svgs/uber.svg";
import Bank from "../assests/Svgs/bank-of-america.svg";
import Pinterest from "../assests/Svgs/pinterest.svg";
import Cisco from "../assests/Svgs/cisco.svg";
import Stripe from "../assests/Svgs/stripe.svg";
import {BsFillHeartFill} from 'react-icons/bs'

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
          <p className="text-2xl font-semibold text-center text-gradient-blue-100">
            Developer
          </p>
          <p className="w-[45rem] text-center text-base text-richblack-100 leading-8">
            We now support 14 popular coding languages. At our core, LeetCode is
            about developers. Our powerful development tools such as Playground
            help you test, debug and even write your own projects online.
          </p>
        </div>
      </div>
      {/*Section 5*/}
      <div className="relative max-w-maxContent w-11/12 mx-auto flex gap-10 mt-20 flex-col items-center justify-center">
        <img src={section5} alt="" width={100} height={100}/>

        <p className="flex items-center justify-center text-xl font-semibold text-pink-500 leading-4 gap-2">
          Made with <span className="text-pink-500"><BsFillHeartFill/></span> in SF
        </p>
        <p className="text-center  w-[60%] text-richblack-50 text-base font-normal leading-8">
          At LeetCode, our mission is to help you improve yourself and land your
          dream job. We have a sizable repository of interview resources for
          many companies. In the past few years, our users have landed jobs at
          top companies around the world.
        </p>

        <div className="flex mt-5 gap-8">
          <img src={Facebook} alt="" width={120} height={100} />
          <img src={Leap} alt="" width={80} height={60} />
          <img src={Apple} alt="" width={40} height={30} />
          <img src={Uber} alt="" width={80} height={70} />
          <img src={Square} alt="" width={70} height={60} />

          <img src={Intel} alt="" width={80} height={70} />
          <img src={Amazon} alt="" width={80} height={60} />
        </div>

        <div className="flex gap-8">
          <img src={Bank} alt=""  width={150} height={90} />
          <img src={Pinterest} alt=""  width={80} height={60} />
          <img src={Cisco} alt=""  width={80} height={60} />
          <img src={Stripe} alt=""  width={80} height={60} />
        </div>
      </div>
    </div>
  );
};

export default Home;
