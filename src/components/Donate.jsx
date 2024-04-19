import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Donate = () => {
  // card Data Start
  const data = [
    {
      img: "src/assets/about1.jpg",
      title: "Rise Your Hand for Education",
    },
    {
      img: "src/assets/donation1.webp",
      title: "Rise Your Hand for Education",
    },
    {
      img: "src/assets/donation2.jpg",
      title: "Rise Your Hand for Education",
    },
    {
      img: "src/assets/donation2.jpg",
      title: "Rise Your Hand for Education",
    },
    {
      img: "src/assets/donation2.jpg",
      title: "Rise Your Hand for Education",
    },
    {
      img: "src/assets/donation2.jpg",
      title: "Rise Your Hand for Education",
    },
    {
      img: "src/assets/donation2.jpg",
      title: "Rise Your Hand for Education",
    },
  ];

  //   Card data End

  // slider Functions
  const slider = useRef(null);
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  //   slider functions end here.
  return (
    <>
      {/* Hero Section */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="min-h-screen flex flex-col justify-center  sm:px-14 lg:px-32 px-5 text-white bg-[url('assets/main4.png')] bg-no-repeat bg-cover opacity-90"
      >
        <motion.div
          animate={{ x: 0 }} initial={false}
          // variants={fadeIn("left", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.6 }}
          className=" w-full lg:w-4/5 space-y-5 "
        >
          <h1 className="text-6xl font-bold mb-4   text-bPrimary md:w-3/4  leading-snug">
            Renu Health <span className="text-dGrey">Care</span>
          </h1>
          <p className="text-bold font-bold hover:text-bPrimary   ">
            If your project grows in size, this option is available.<br></br>
            This method has the trade-off that it takes<br></br>a long time to
            install the package.<br></br>
            If your project grows in size, this option is <br></br>available.
            This method time to install the package. If your project<br></br>
            grows in size, this option is available. This method has the
            <br></br> trade-off that it takes a long time to install the
            package.
          </p>
        </motion.div>
      </motion.div>
      {/* 2nd Section start */}
      <div
        // variants={fadeIn("up", 0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.6 }}
        className="min-h-screen flex flex-col justify-center lg:px-32 pt-2
        "
      >
        <div
          // variants={fadeIn("up", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col items-center lg:flex-row justify-center mb-10 lg:mb-0"
        >
          <div>
            <h1 className="text-4xl font-semibold text-center justify-center mt-0  lg:text-start">
              Rise Your Hand To Help The Poor Children
            </h1>
            <p className="mt-2 text-center justify-center  lg:text-start">
              he trade-off that it takes a long time to install the package.
            </p>
          </div>
          <div>
            <button
              className=" text-bPrimary px-4 mt-20 py-2 rounded-lg  active:bg-slate-600"
              onClick={() => slider.current.slickPrev()}
            >
              <FaArrowLeft size={25} />
            </button>
            <button
              className=" text-bPrimary px-4 py-2 rounded-lg  active:bg-slate-600"
              onClick={() => slider.current.slickNext()}
            >
              <FaArrowRight size={25} />
            </button>
          </div>
        </div>
        <div className="mt-5">
          <Slider ref={slider} {...settings}>
            {data.map((e, index) => (
              <div
                className="h-[300px] text-nGrey rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer "
                key={index}
              >
                <div>
                  <img
                    src={e.img}
                    alt=""
                    className="h-56 rounded-t-xl w-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className=" font-semibold text-xl pt-4">{e.title}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* donation form */}
    </>
  );
};

export default Donate;
