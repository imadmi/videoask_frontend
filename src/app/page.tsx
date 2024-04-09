"use client";
import React from "react";
import { SparklesCore } from "./components/ui/sparkles";
import { HoverEffect } from "./components/ui/card-hover-effect";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/pictures/old_man.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/pictures/amazigh_woman.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/pictures/young_man.jpg",
  },
  // {
  //   id: 4,
  //   name: "Jane Smith",
  //   designation: "Data Scientist",
  //   image: "/pictures/young_man.jpg",
  // },
];

const SparklesPreview = () => {
  return (
    <div
      className="h-dvh relative w-full bg-black #bg-[#0b42bb] flex flex-col 
      items-center font-sans overflow-y-scroll"
    >
      <div className="w-full absolute inset-0 min-h-dvh h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="absolute py-[25vh] w-full ">
        <h1
          className="md:text-4xl text-3xl lg:text-5xl font-bold text-center 
        text-white relative z-20 mb-9"
        >
          Choose the one that best represents you
        </h1>
        <h1
          className="md:text-4xl text-3xl lg:text-5xl font-bold text-center 
        text-white relative z-20 mb-20"
        >
          اختر الشخص الذي يمثلك بشكل أفضل
        </h1>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <HoverEffect items={people} />
        </div>
      </div>
    </div>
  );
};

export default SparklesPreview;
