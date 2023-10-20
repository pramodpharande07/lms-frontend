import React from "react";
import Homelayout from "../Layouts/Homelayout";
import aboutUs from "../assets/Images/aboutUs.jpg";
import apj from "../assets/Images/apj.png";
import billgates from "../assets/Images/billgates.png";
import nelson from "../assets/Images/nelson.jpg";
import steav from "../assets/Images/steav.png";

function AboutUs() {
  return (
    <Homelayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex item center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the aafordable ane quality education to the
              world. We are provding the platform for the aspiring teachers and
              students to share their skills, creativity and knoledge to each
              other to empour and contribute in the growth and wellness of
              mankind
            </p>
          </section>

          <div className="w-1/2 mb-9 ">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0);",
              }}
              alt="about main image"
              className="drop-shadow-2xl"
              src={aboutUs}
            />
          </div>
        </div>

        <div className="carousel w-1/2 my-16 m-auto">

          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img src={apj} className="w-40 rounded-[100%] border border-2 border-gray-400"/>
              <p className="text-xl text-gray-200">In this world, fear has no place.</p>
              <h3 className="text-2xl font-semibold"> Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
          <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img src={billgates} className="w-40 rounded-[100%] border border-2 border-gray-400"/>
              <p className="text-xl text-gray-200">If you can't make it good, at least make it look good.</p>
              <h3 className="text-2xl font-semibold"> Bill Gates</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
          <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img src={nelson} className="w-40 rounded-[100%] border border-2 border-gray-400"/>
              <p className="text-xl text-gray-200">You can never have an impact on society if you have not changed yourself.</p>
              <h3 className="text-2xl font-semibold"> Nelson Mandela</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
          <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img src={steav} className="w-40 rounded-[100%] border border-2 border-gray-400"/>
              <p className="text-xl text-gray">The people who are crazy enough to think they can change the world are the ones who do.</p>
              <h3 className="text-2xl font-semibold"> Steav Jobs</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Homelayout>
  );
}

export default AboutUs;
