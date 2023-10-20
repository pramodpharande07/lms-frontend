import React from "react";
import Homelayout from "../Layouts/Homelayout";
import aboutUs from "../assets/Images/aboutUs.jpg";
import { celebrities } from "../constant/celebrityData";
import CarousalSlide from "../components/CarousalSlide";

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
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0)",
              }}
              alt="about main image"
              className="drop-shadow-2xl"
              src={aboutUs}
            />
          </div>
        </div>

        <div className="carousel w-1/2 m-auto my-16 ">
           {celebrities && celebrities.map(celebrity => (<CarousalSlide 
                                                       {...celebrity} 
                                                       key={celebrity.slideNumber} 
                                                       totalSlides={celebrities.length}/>
                                                       ))}
        </div>
      </div>
    </Homelayout>
  );
}

export default AboutUs;
